(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17938a22"],{"4e4b":function(e,t,n){"use strict";n("e64d")},7544:function(e,t,n){"use strict";var c=n("246f"),o=n("7a23"),d={class:"title"},a=Object(o["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,a=e,r=Object(o["ref"])(),u=function(){n("update:visible",!1)};function b(e){var t=e.clientX,n=e.clientY;function c(e){var c=r.value,d=e.clientX-t,a=e.clientY-n;o(c,c.offsetLeft+d,c.offsetTop+a,e)}function o(e,c,o,d){var r=document.getElementById(a.warpper);c>0&&c+e.offsetWidth<r.offsetWidth&&(e.style.left=c+"px",t=d.clientX),o>0&&o+e.offsetHeight<r.offsetHeight&&(e.style.top=o+"px",n=d.clientY)}window.onmousemove=function(e){e.preventDefault(),c(e)},window.onmouseup=function(e){c(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===a.type}]),ref_key:"pannelBox",ref:r},["model"===a.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:b},[Object(o["createElementVNode"])("span",d,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])(Object(o["unref"])(c["a"]),{onClick:u,class:"close-btn"})],544)):Object(o["createCommentVNode"])("",!0),Object(o["renderSlot"])(t.$slots,"default")],2)),[[o["vShow"],"pannel"===a.type||e.visible]])}}}),r=(n("4e4b"),n("6b0d")),u=n.n(r);const b=u()(a,[["__scopeId","data-v-b885d716"]]);t["a"]=b},9283:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=n("7544"),d={class:"f-mb"},a=Object(c["createElementVNode"])("span",null,"按钮:",-1),r=Object(c["createTextVNode"])("POI搜索"),u=Object(c["createTextVNode"])("视角复位"),b=Object(c["createTextVNode"])("二三维切换"),i=Object(c["createTextVNode"])("地图切换"),l=Object(c["createTextVNode"])("全屏切换"),f=Object(c["createTextVNode"])("VR模式"),O=Object(c["createTextVNode"])("帮助"),j={class:"f-mb"},h=Object(c["createElementVNode"])("span",null,"面板:",-1),p=Object(c["createTextVNode"])("位置信息状态栏"),s=Object(c["createTextVNode"])("时钟面板（左下角）"),k=Object(c["createTextVNode"])("时间刻度线"),V=Object(c["createTextVNode"])("导航球"),w=Object(c["createTextVNode"])("比例尺"),C=Object(c["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(c["reactive"])({enabledPOI:!0,enabledView:!0,enabledSceneModePicker:!0,enabledBaseLayerPicker:!0,enabledFullScreen:!0,enabledVR:!0,enabledHelpButton:!0,enabledLocation:!0,enabledClock:!0,enabledTimeLine:!0,enabledNav:!0,enabledLegend:!0}),C=function(){t.bindPOI(n.enabledPOI)},N=function(){t.bindView(n.enabledView)},m=function(){t.bindSceneModePicker(n.enabledSceneModePicker)},x=function(){t.bindBaseLayerPicker(n.enabledBaseLayerPicker)},v=function(){t.bindFullScreen(n.enabledFullScreen)},g=function(){t.bindVR(n.enabledVR)},L=function(){t.bindHelpButton(n.enabledHelpButton)},_=function(){t.bindLocation(n.enabledLocation)},y=function(){t.bindClock(n.enabledClock)},B=function(){t.bindTimeLine(n.enabledTimeLine)},T=function(){t.bindNav(n.enabledNav)},P=function(){t.bindLegend(n.enabledLegend)};return function(e,t){var S=Object(c["resolveComponent"])("a-checkbox"),U=Object(c["resolveComponent"])("a-space");return Object(c["openBlock"])(),Object(c["createBlock"])(o["a"],{class:"infoView"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",d,[Object(c["createVNode"])(U,null,{default:Object(c["withCtx"])((function(){return[a,Object(c["createVNode"])(S,{checked:Object(c["unref"])(n).enabledPOI,"onUpdate:checked":t[0]||(t[0]=function(e){return Object(c["unref"])(n).enabledPOI=e}),onChange:C},{default:Object(c["withCtx"])((function(){return[r]})),_:1},8,["checked"]),Object(c["createVNode"])(S,{checked:Object(c["unref"])(n).enabledView,"onUpdate:checked":t[1]||(t[1]=function(e){return Object(c["unref"])(n).enabledView=e}),onChange:N},{default:Object(c["withCtx"])((function(){return[u]})),_:1},8,["checked"]),Object(c["createVNode"])(S,{checked:Object(c["unref"])(n).enabledSceneModePicker,"onUpdate:checked":t[2]||(t[2]=function(e){return Object(c["unref"])(n).enabledSceneModePicker=e}),onChange:m},{default:Object(c["withCtx"])((function(){return[b]})),_:1},8,["checked"]),Object(c["createVNode"])(S,{checked:Object(c["unref"])(n).enabledBaseLayerPicker,"onUpdate:checked":t[3]||(t[3]=function(e){return Object(c["unref"])(n).enabledBaseLayerPicker=e}),onChange:x},{default:Object(c["withCtx"])((function(){return[i]})),_:1},8,["checked"]),Object(c["createVNode"])(S,{checked:Object(c["unref"])(n).enabledFullScreen,"onUpdate:checked":t[4]||(t[4]=function(e){return Object(c["unref"])(n).enabledFullScreen=e}),onChange:v},{default:Object(c["withCtx"])((function(){return[l]})),_:1},8,["checked"]),Object(c["createVNode"])(S,{checked:Object(c["unref"])(n).enabledVR,"onUpdate:checked":t[5]||(t[5]=function(e){return Object(c["unref"])(n).enabledVR=e}),onChange:g},{default:Object(c["withCtx"])((function(){return[f]})),_:1},8,["checked"]),Object(c["createVNode"])(S,{checked:Object(c["unref"])(n).enabledHelpButton,"onUpdate:checked":t[6]||(t[6]=function(e){return Object(c["unref"])(n).enabledHelpButton=e}),onChange:L},{default:Object(c["withCtx"])((function(){return[O]})),_:1},8,["checked"])]})),_:1})]),Object(c["createElementVNode"])("div",j,[Object(c["createVNode"])(U,null,{default:Object(c["withCtx"])((function(){return[h,Object(c["createVNode"])(S,{checked:Object(c["unref"])(n).enabledLocation,"onUpdate:checked":t[7]||(t[7]=function(e){return Object(c["unref"])(n).enabledLocation=e}),onChange:_},{default:Object(c["withCtx"])((function(){return[p]})),_:1},8,["checked"]),Object(c["createVNode"])(S,{checked:Object(c["unref"])(n).enabledClock,"onUpdate:checked":t[8]||(t[8]=function(e){return Object(c["unref"])(n).enabledClock=e}),onChange:y},{default:Object(c["withCtx"])((function(){return[s]})),_:1},8,["checked"]),Object(c["createVNode"])(S,{checked:Object(c["unref"])(n).enabledTimeLine,"onUpdate:checked":t[9]||(t[9]=function(e){return Object(c["unref"])(n).enabledTimeLine=e}),onChange:B},{default:Object(c["withCtx"])((function(){return[k]})),_:1},8,["checked"]),Object(c["createVNode"])(S,{checked:Object(c["unref"])(n).enabledNav,"onUpdate:checked":t[10]||(t[10]=function(e){return Object(c["unref"])(n).enabledNav=e}),onChange:T},{default:Object(c["withCtx"])((function(){return[V]})),_:1},8,["checked"]),Object(c["createVNode"])(S,{checked:Object(c["unref"])(n).enabledLegend,"onUpdate:checked":t[11]||(t[11]=function(e){return Object(c["unref"])(n).enabledLegend=e}),onChange:P},{default:Object(c["withCtx"])((function(){return[w]})),_:1},8,["checked"])]})),_:1})])]})),_:1})}}});const N=C;t["default"]=N},e64d:function(e,t,n){}}]);