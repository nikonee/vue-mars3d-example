(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68565e70"],{"4e4b":function(e,t,n){"use strict";n("e64d")},7544:function(e,t,n){"use strict";var c=n("246f"),a=n("7a23"),o={class:"title"},l=Object(a["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,l=e,u=Object(a["ref"])(),r=function(){n("update:visible",!1)};function i(e){var t=e.clientX,n=e.clientY;function c(e){var c=u.value,o=e.clientX-t,l=e.clientY-n;a(c,c.offsetLeft+o,c.offsetTop+l,e)}function a(e,c,a,o){var u=document.getElementById(l.warpper);c>0&&c+e.offsetWidth<u.offsetWidth&&(e.style.left=c+"px",t=o.clientX),a>0&&a+e.offsetHeight<u.offsetHeight&&(e.style.top=a+"px",n=o.clientY)}window.onmousemove=function(e){e.preventDefault(),c(e)},window.onmouseup=function(e){c(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===l.type}]),ref_key:"pannelBox",ref:u},["model"===l.type?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:i},[Object(a["createElementVNode"])("span",o,Object(a["toDisplayString"])(e.title),1),Object(a["createVNode"])(Object(a["unref"])(c["a"]),{onClick:r,class:"close-btn"})],544)):Object(a["createCommentVNode"])("",!0),Object(a["renderSlot"])(t.$slots,"default")],2)),[[a["vShow"],"pannel"===l.type||e.visible]])}}}),u=(n("4e4b"),n("6b0d")),r=n.n(u);const i=r()(l,[["__scopeId","data-v-b885d716"]]);t["a"]=i},9368:function(e,t,n){"use strict";n("d442")},d442:function(e,t,n){},d799:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=n("7544"),o=function(e){return Object(c["pushScopeId"])("data-v-ac0512a4"),e=e(),Object(c["popScopeId"])(),e},l={class:"f-mb"},u=o((function(){return Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"轨迹方向",-1)})),r={class:"f-mb"},i=o((function(){return Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"前后侧摆",-1)})),d={class:"f-mb"},s=o((function(){return Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"左右侧摆",-1)})),f={class:"f-mb"},b=Object(c["createTextVNode"])("设置摄像头位置"),p=Object(c["createTextVNode"])("计算与地面焦点"),v=Object(c["createTextVNode"])("深度检测"),O=Object(c["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(c["ref"])(220),o=Object(c["ref"])(75),O=Object(c["ref"])(0),j=Object(c["ref"])(!1);t.eventTarget.on("loadOK",(function(){t.updateModel(n.value,o.value,O.value)}));var m=function(){t.updateModel(n.value,o.value,O.value)},w=function(){t.updateModel(n.value,o.value,O.value)},h=function(){t.updateModel(n.value,o.value,O.value)},V=function(){t.testTerrain(j.value)},N=function(){t.sePoint()},C=function(){t.getCenter()};return function(e,t){var x=Object(c["resolveComponent"])("a-slider"),k=Object(c["resolveComponent"])("a-space"),g=Object(c["resolveComponent"])("mars-button"),y=Object(c["resolveComponent"])("a-checkbox");return Object(c["openBlock"])(),Object(c["createBlock"])(a["a"],{class:"infoView"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(k,null,{default:Object(c["withCtx"])((function(){return[u,Object(c["createVNode"])(x,{onChange:m,value:n.value,"onUpdate:value":t[0]||(t[0]=function(e){return n.value=e}),min:0,max:360,step:.01},null,8,["value","step"]),Object(c["createTextVNode"])("值"+Object(c["toDisplayString"])(n.value),1)]})),_:1})]),Object(c["createElementVNode"])("div",r,[Object(c["createVNode"])(k,null,{default:Object(c["withCtx"])((function(){return[i,Object(c["createVNode"])(x,{onChange:w,value:o.value,"onUpdate:value":t[1]||(t[1]=function(e){return o.value=e}),min:-180,max:180,step:.01},null,8,["value","step"]),Object(c["createTextVNode"])("值"+Object(c["toDisplayString"])(o.value),1)]})),_:1})]),Object(c["createElementVNode"])("div",d,[Object(c["createVNode"])(k,null,{default:Object(c["withCtx"])((function(){return[s,Object(c["createVNode"])(x,{onChange:h,value:O.value,"onUpdate:value":t[2]||(t[2]=function(e){return O.value=e}),min:-180,max:180,step:.01},null,8,["value","step"]),Object(c["createTextVNode"])("值"+Object(c["toDisplayString"])(O.value),1)]})),_:1})]),Object(c["createElementVNode"])("div",f,[Object(c["createVNode"])(k,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{onClick:N},{default:Object(c["withCtx"])((function(){return[b]})),_:1}),Object(c["createVNode"])(g,{onClick:C},{default:Object(c["withCtx"])((function(){return[p]})),_:1}),Object(c["createVNode"])(y,{onChange:V,checked:j.value,"onUpdate:checked":t[3]||(t[3]=function(e){return j.value=e})},{default:Object(c["withCtx"])((function(){return[v]})),_:1},8,["checked"])]})),_:1})])]})),_:1})}}}),j=(n("9368"),n("6b0d")),m=n.n(j);const w=m()(O,[["__scopeId","data-v-ac0512a4"]]);t["default"]=w},e64d:function(e,t,n){}}]);