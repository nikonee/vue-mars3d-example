(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33a66734"],{"4e4b":function(e,t,n){"use strict";n("e64d")},"58c3":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=n("7544"),a=n("bc30"),r=n("a9ad"),i=Object(c["defineComponent"])({setup:function(e){return function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(o["a"],{class:"infoView"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(r["a"])]})),_:1}),Object(c["createVNode"])(a["a"])],64)}}});const l=i;t["default"]=l},7544:function(e,t,n){"use strict";var c=n("246f"),o=n("7a23"),a={class:"title"},r=Object(o["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,r=e,i=Object(o["ref"])(),l=function(){n("update:visible",!1)};function u(e){var t=e.clientX,n=e.clientY;function c(e){var c=i.value,a=e.clientX-t,r=e.clientY-n;o(c,c.offsetLeft+a,c.offsetTop+r,e)}function o(e,c,o,a){var i=document.getElementById(r.warpper);c>0&&c+e.offsetWidth<i.offsetWidth&&(e.style.left=c+"px",t=a.clientX),o>0&&o+e.offsetHeight<i.offsetHeight&&(e.style.top=o+"px",n=a.clientY)}window.onmousemove=function(e){e.preventDefault(),c(e)},window.onmouseup=function(e){c(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===r.type}]),ref_key:"pannelBox",ref:i},["model"===r.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:u},[Object(o["createElementVNode"])("span",a,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])(Object(o["unref"])(c["a"]),{onClick:l,class:"close-btn"})],544)):Object(o["createCommentVNode"])("",!0),Object(o["renderSlot"])(t.$slots,"default")],2)),[[o["vShow"],"pannel"===r.type||e.visible]])}}}),i=(n("4e4b"),n("6b0d")),l=n.n(i);const u=l()(r,[["__scopeId","data-v-b885d716"]]);t["a"]=u},"92f9":function(e,t,n){"use strict";n("af22")},a9ad:function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"图层状态:",-1),a=Object(c["createTextVNode"])("显示隐藏"),r=Object(c["createTextVNode"])("Popup绑定"),i=Object(c["createTextVNode"])("Tooltip"),l=Object(c["createTextVNode"])("右键绑定"),u=Object(c["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(c["reactive"])({enabledShowHide:!0,enabledPopup:!0,enabledTooltip:!1,enabledRightMenu:!0}),u=function(){t.bindShowHide(n.enabledShowHide)},d=function(){t.bindPopup(n.enabledPopup)},b=function(){t.bindTooltip(n.enabledTooltip)},f=function(){t.bindRightMenu(n.enabledRightMenu)};return function(e,t){var p=Object(c["resolveComponent"])("a-checkbox"),s=Object(c["resolveComponent"])("a-space");return Object(c["openBlock"])(),Object(c["createBlock"])(s,null,{default:Object(c["withCtx"])((function(){return[o,Object(c["createVNode"])(p,{checked:Object(c["unref"])(n).enabledShowHide,"onUpdate:checked":t[0]||(t[0]=function(e){return Object(c["unref"])(n).enabledShowHide=e}),onChange:u},{default:Object(c["withCtx"])((function(){return[a]})),_:1},8,["checked"]),Object(c["createVNode"])(p,{checked:Object(c["unref"])(n).enabledPopup,"onUpdate:checked":t[1]||(t[1]=function(e){return Object(c["unref"])(n).enabledPopup=e}),onChange:d},{default:Object(c["withCtx"])((function(){return[r]})),_:1},8,["checked"]),Object(c["createVNode"])(p,{checked:Object(c["unref"])(n).enabledTooltip,"onUpdate:checked":t[2]||(t[2]=function(e){return Object(c["unref"])(n).enabledTooltip=e}),onChange:b},{default:Object(c["withCtx"])((function(){return[i]})),_:1},8,["checked"]),Object(c["createVNode"])(p,{checked:Object(c["unref"])(n).enabledRightMenu,"onUpdate:checked":t[3]||(t[3]=function(e){return Object(c["unref"])(n).enabledRightMenu=e}),onChange:f},{default:Object(c["withCtx"])((function(){return[l]})),_:1},8,["checked"])]})),_:1})}}});const d=u;t["a"]=d},af22:function(e,t,n){},bc30:function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["createTextVNode"])("定位至山区"),a=Object(c["createTextVNode"])("定位至模型");function r(e,t,n,r,i,l){var u=Object(c["resolveComponent"])("mars-button"),d=Object(c["resolveComponent"])("a-space"),b=Object(c["resolveComponent"])("pannel");return Object(c["openBlock"])(),Object(c["createBlock"])(b,{class:"localBtn"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{onClick:e.centerAtTerrain},{default:Object(c["withCtx"])((function(){return[o]})),_:1},8,["onClick"]),Object(c["createVNode"])(u,{onClick:e.centerAtModel},{default:Object(c["withCtx"])((function(){return[a]})),_:1},8,["onClick"])]})),_:1})]})),_:1})}n("d81d");var i=n("7544"),l=Object(c["defineComponent"])({components:{Pannel:i["a"]},setup:function(){var e=window.mapWork,t=function(){e.map.setCameraView({lat:30.859414,lng:116.28709,alt:8617,heading:18,pitch:-28})},n=function(){e.centerAtModel(),e.map.setCameraView({lng:114.019768,lat:22.627935,alt:80.6,heading:359,pitch:-34})};return{centerAtTerrain:t,centerAtModel:n}}}),u=(n("92f9"),n("6b0d")),d=n.n(u);const b=d()(l,[["render",r],["__scopeId","data-v-a6077f40"]]);t["a"]=b},d81d:function(e,t,n){"use strict";var c=n("23e7"),o=n("b727").map,a=n("1dde"),r=a("map");c({target:"Array",proto:!0,forced:!r},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},e64d:function(e,t,n){}}]);