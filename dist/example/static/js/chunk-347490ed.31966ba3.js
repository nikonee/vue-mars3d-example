(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-347490ed"],{"4c47":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=n("7544"),r=n("bc30"),a={class:"f-mb"},i=Object(c["createTextVNode"])("清除"),u=Object(c["createTextVNode"])("仅测量模型(不拾取地形)"),l={class:"f-mb"},d=Object(c["createTextVNode"])("空间距离"),f=Object(c["createTextVNode"])("水平面积"),b=Object(c["createTextVNode"])("高度差"),s=Object(c["createTextVNode"])("坐标测量"),j=Object(c["createTextVNode"])("贴地距离"),O=Object(c["createTextVNode"])("贴地面积"),p=Object(c["createTextVNode"])("三角测量"),m=Object(c["createTextVNode"])("方位角"),C=Object(c["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(c["ref"])(!1),C=function(){t.measureLength()},w=function(){t.measureArea()},h=function(){t.measureHeight()},v=function(){t.measurePoint()},V=function(){t.measureSurfaceLength()},N=function(){t.measureSurfaceeArea()},x=function(){t.measureTriangleHeight()},k=function(){t.measureAngle()},_=function(){t.onlyPickModelPosition(n.value)},g=function(){t.removeAll()};return function(e,t){var y=Object(c["resolveComponent"])("mars-button"),T=Object(c["resolveComponent"])("a-checkbox"),B=Object(c["resolveComponent"])("a-space");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(o["a"],{class:"infoView"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",a,[Object(c["createVNode"])(B,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(y,{onClick:g},{default:Object(c["withCtx"])((function(){return[i]})),_:1}),Object(c["createVNode"])(T,{onChange:_,checked:n.value,"onUpdate:checked":t[0]||(t[0]=function(e){return n.value=e})},{default:Object(c["withCtx"])((function(){return[u]})),_:1},8,["checked"])]})),_:1})]),Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(B,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(y,{onClick:C},{default:Object(c["withCtx"])((function(){return[d]})),_:1}),Object(c["createVNode"])(y,{onClick:w},{default:Object(c["withCtx"])((function(){return[f]})),_:1}),Object(c["createVNode"])(y,{onClick:h},{default:Object(c["withCtx"])((function(){return[b]})),_:1}),Object(c["createVNode"])(y,{onClick:v},{default:Object(c["withCtx"])((function(){return[s]})),_:1})]})),_:1})]),Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(B,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(y,{onClick:V},{default:Object(c["withCtx"])((function(){return[j]})),_:1}),Object(c["createVNode"])(y,{onClick:N},{default:Object(c["withCtx"])((function(){return[O]})),_:1}),Object(c["createVNode"])(y,{onClick:x},{default:Object(c["withCtx"])((function(){return[p]})),_:1}),Object(c["createVNode"])(y,{onClick:k},{default:Object(c["withCtx"])((function(){return[m]})),_:1})]})),_:1})])]})),_:1}),Object(c["createVNode"])(r["a"])],64)}}});const w=C;t["default"]=w},"4e4b":function(e,t,n){"use strict";n("e64d")},7544:function(e,t,n){"use strict";var c=n("246f"),o=n("7a23"),r={class:"title"},a=Object(o["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,a=e,i=Object(o["ref"])(),u=function(){n("update:visible",!1)};function l(e){var t=e.clientX,n=e.clientY;function c(e){var c=i.value,r=e.clientX-t,a=e.clientY-n;o(c,c.offsetLeft+r,c.offsetTop+a,e)}function o(e,c,o,r){var i=document.getElementById(a.warpper);c>0&&c+e.offsetWidth<i.offsetWidth&&(e.style.left=c+"px",t=r.clientX),o>0&&o+e.offsetHeight<i.offsetHeight&&(e.style.top=o+"px",n=r.clientY)}window.onmousemove=function(e){e.preventDefault(),c(e)},window.onmouseup=function(e){c(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===a.type}]),ref_key:"pannelBox",ref:i},["model"===a.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:l},[Object(o["createElementVNode"])("span",r,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])(Object(o["unref"])(c["a"]),{onClick:u,class:"close-btn"})],544)):Object(o["createCommentVNode"])("",!0),Object(o["renderSlot"])(t.$slots,"default")],2)),[[o["vShow"],"pannel"===a.type||e.visible]])}}}),i=(n("4e4b"),n("6b0d")),u=n.n(i);const l=u()(a,[["__scopeId","data-v-b885d716"]]);t["a"]=l},"92f9":function(e,t,n){"use strict";n("af22")},af22:function(e,t,n){},bc30:function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["createTextVNode"])("定位至山区"),r=Object(c["createTextVNode"])("定位至模型");function a(e,t,n,a,i,u){var l=Object(c["resolveComponent"])("mars-button"),d=Object(c["resolveComponent"])("a-space"),f=Object(c["resolveComponent"])("pannel");return Object(c["openBlock"])(),Object(c["createBlock"])(f,{class:"localBtn"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{onClick:e.centerAtTerrain},{default:Object(c["withCtx"])((function(){return[o]})),_:1},8,["onClick"]),Object(c["createVNode"])(l,{onClick:e.centerAtModel},{default:Object(c["withCtx"])((function(){return[r]})),_:1},8,["onClick"])]})),_:1})]})),_:1})}n("d81d");var i=n("7544"),u=Object(c["defineComponent"])({components:{Pannel:i["a"]},setup:function(){var e=window.mapWork,t=function(){e.map.setCameraView({lat:30.859414,lng:116.28709,alt:8617,heading:18,pitch:-28})},n=function(){e.centerAtModel(),e.map.setCameraView({lng:114.019768,lat:22.627935,alt:80.6,heading:359,pitch:-34})};return{centerAtTerrain:t,centerAtModel:n}}}),l=(n("92f9"),n("6b0d")),d=n.n(l);const f=d()(u,[["render",a],["__scopeId","data-v-a6077f40"]]);t["a"]=f},d81d:function(e,t,n){"use strict";var c=n("23e7"),o=n("b727").map,r=n("1dde"),a=r("map");c({target:"Array",proto:!0,forced:!a},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},e64d:function(e,t,n){}}]);