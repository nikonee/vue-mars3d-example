(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd1a4d36"],{"0fbb":function(e,t,n){"use strict";n("d1cc")},3747:function(e,t,n){"use strict";var c=n("975b"),a=n("4ef5"),o=(n("3b18"),n("f64c")),l=(n("b0c0"),n("7a23")),r=Object(l["createElementVNode"])("span",{class:"pannel-item-label"},"数据管理:",-1),u=Object(l["createTextVNode"])("清除"),i=Object(l["createTextVNode"])(" 保存 "),d=Object(l["createTextVNode"])(" 打开 "),b=Object(l["defineComponent"])({setup:function(e){var t=window.mapWork,n=function(){t.btnClear()},b=function(){t.btnExpFile()},f=function(e){return!1},s=function(e){var n=e.file,c=n.name,a=null===c||void 0===c?void 0:c.substring(c.lastIndexOf(".")+1,c.length).toLowerCase();"json"!=a&&o["a"].error("文件类型不合法,请选择json格式标注文件！"),t.btnImpFile(n)},j=Object(l["ref"])([]);return function(e,t){var o=Object(l["resolveComponent"])("mars-button"),O=Object(l["resolveComponent"])("a-button"),p=Object(l["resolveComponent"])("a-upload"),v=Object(l["resolveComponent"])("a-space");return Object(l["openBlock"])(),Object(l["createBlock"])(v,null,{default:Object(l["withCtx"])((function(){return[r,Object(l["createVNode"])(o,{onClick:n},{default:Object(l["withCtx"])((function(){return[u]})),_:1}),Object(l["createVNode"])(o,{onClick:b,title:"保存GeoJSON"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(Object(l["unref"])(a["a"])),i]})),_:1}),Object(l["createVNode"])(p,{multiple:!1,name:"file",accept:"json,geojson","file-list":j.value,showUploadList:!1,supportServerRender:!0,beforeUpload:f,onChange:s},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(O,{title:"打开GeoJSON"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(Object(l["unref"])(c["a"])),d]})),_:1})]})),_:1},8,["file-list"])]})),_:1})}}});const f=b;t["a"]=f},"4e4b":function(e,t,n){"use strict";n("e64d")},7544:function(e,t,n){"use strict";var c=n("246f"),a=n("7a23"),o={class:"title"},l=Object(a["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,l=e,r=Object(a["ref"])(),u=function(){n("update:visible",!1)};function i(e){var t=e.clientX,n=e.clientY;function c(e){var c=r.value,o=e.clientX-t,l=e.clientY-n;a(c,c.offsetLeft+o,c.offsetTop+l,e)}function a(e,c,a,o){var r=document.getElementById(l.warpper);c>0&&c+e.offsetWidth<r.offsetWidth&&(e.style.left=c+"px",t=o.clientX),a>0&&a+e.offsetHeight<r.offsetHeight&&(e.style.top=a+"px",n=o.clientY)}window.onmousemove=function(e){e.preventDefault(),c(e)},window.onmouseup=function(e){c(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===l.type}]),ref_key:"pannelBox",ref:r},["model"===l.type?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:i},[Object(a["createElementVNode"])("span",o,Object(a["toDisplayString"])(e.title),1),Object(a["createVNode"])(Object(a["unref"])(c["a"]),{onClick:u,class:"close-btn"})],544)):Object(a["createCommentVNode"])("",!0),Object(a["renderSlot"])(t.$slots,"default")],2)),[[a["vShow"],"pannel"===l.type||e.visible]])}}}),r=(n("4e4b"),n("6b0d")),u=n.n(r);const i=u()(l,[["__scopeId","data-v-b885d716"]]);t["a"]=i},"92f9":function(e,t,n){"use strict";n("af22")},af22:function(e,t,n){},bc30:function(e,t,n){"use strict";var c=n("7a23"),a=Object(c["createTextVNode"])("定位至山区"),o=Object(c["createTextVNode"])("定位至模型");function l(e,t,n,l,r,u){var i=Object(c["resolveComponent"])("mars-button"),d=Object(c["resolveComponent"])("a-space"),b=Object(c["resolveComponent"])("pannel");return Object(c["openBlock"])(),Object(c["createBlock"])(b,{class:"localBtn"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{onClick:e.centerAtTerrain},{default:Object(c["withCtx"])((function(){return[a]})),_:1},8,["onClick"]),Object(c["createVNode"])(i,{onClick:e.centerAtModel},{default:Object(c["withCtx"])((function(){return[o]})),_:1},8,["onClick"])]})),_:1})]})),_:1})}n("d81d");var r=n("7544"),u=Object(c["defineComponent"])({components:{Pannel:r["a"]},setup:function(){var e=window.mapWork,t=function(){e.map.setCameraView({lat:30.859414,lng:116.28709,alt:8617,heading:18,pitch:-28})},n=function(){e.centerAtModel(),e.map.setCameraView({lng:114.019768,lat:22.627935,alt:80.6,heading:359,pitch:-34})};return{centerAtTerrain:t,centerAtModel:n}}}),i=(n("92f9"),n("6b0d")),d=n.n(i);const b=d()(u,[["render",l],["__scopeId","data-v-a6077f40"]]);t["a"]=b},d1cc:function(e,t,n){},d81d:function(e,t,n){"use strict";var c=n("23e7"),a=n("b727").map,o=n("1dde"),l=o("map");c({target:"Array",proto:!0,forced:!l},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},d8aa:function(e,t,n){"use strict";n.r(t);var c=n("f271"),a=n("7a23"),o=n("7544"),l=n("3747"),r=n("bc30"),u=function(e){return Object(a["pushScopeId"])("data-v-7036530b"),e=e(),Object(a["popScopeId"])(),e},i={class:"infoView-content"},d={class:"f-mb"},b=u((function(){return Object(a["createElementVNode"])("span",{class:"pannel-item-label"},"图层状态:",-1)})),f=Object(a["createTextVNode"])("显示隐藏"),s={class:"f-mb"},j=u((function(){return Object(a["createElementVNode"])("span",{class:"pannel-item-label"},"数据维护:",-1)})),O=Object(a["createTextVNode"])("图上标绘"),p={class:"f-mb"},v={class:"f-mb"},m=u((function(){return Object(a["createElementVNode"])("span",{class:"pannel-item-label"},"半径(米)",-1)})),h={class:"f-mb"},V=u((function(){return Object(a["createElementVNode"])("span",{class:"pannel-item-label"},"方向",-1)})),N={class:"f-mb"},C=u((function(){return Object(a["createElementVNode"])("span",{class:"pannel-item-label"},"仰角",-1)})),w={class:"f-mb"},x=u((function(){return Object(a["createElementVNode"])("span",{class:"pannel-item-label"},"左右(roll)",-1)})),g={class:"f-mb"},k=u((function(){return Object(a["createElementVNode"])("span",{class:"pannel-item-label"},"上下夹角",-1)})),_={class:"f-mb"},S=u((function(){return Object(a["createElementVNode"])("span",{class:"pannel-item-label"},"左右夹角",-1)})),E={class:"f-mb"},y=u((function(){return Object(a["createElementVNode"])("span",{class:"pannel-item-label"},"扫描面",-1)})),T=Object(a["createTextVNode"])("是否扫描"),B=Object(a["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(a["ref"])(["1","2"]),u=Object(a["reactive"])({enabledShowHide:!0,enabledShowScanPlane:!0}),B=Object(a["ref"])(1e5),U=Object(a["ref"])(30),H=Object(a["ref"])(0),I=Object(a["ref"])(0),D=Object(a["ref"])(50),A=Object(a["ref"])(50);t.eventTarget.on("loadOk",(function(){t.addGraphic01(U.value,H.value,I.value,B.value,D.value,A.value)}));var P=function(){t.radiusChange(B.value)},W=function(){t.headingChange(U.value)},J=function(){t.pitchChange(H.value)},M=function(){t.rollChange(I.value)},F=function(){t.xHalfAngle(D.value)},G=function(){t.yHalfAngle(A.value)},K=function(){t.ShowScanPlane(u.enabledShowScanPlane)},L=function(){t.bindShowHide(u.enabledShowHide)},X=function(){t.startDraw(U.value,H.value,I.value,B.value,D.value,A.value)};return function(e,t){var Y=Object(a["resolveComponent"])("a-checkbox"),R=Object(a["resolveComponent"])("a-space"),z=Object(a["resolveComponent"])("mars-button"),$=Object(a["resolveComponent"])("a-collapse-panel"),q=Object(a["resolveComponent"])("mars-input-number"),Q=Object(a["resolveComponent"])("a-slider"),Z=Object(a["resolveComponent"])("a-collapse"),ee=Object(a["resolveComponent"])("a-form");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(o["a"],{class:"infoView"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(ee,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(Z,{activeKey:n.value,"onUpdate:activeKey":t[8]||(t[8]=function(e){return n.value=e})},{expandIcon:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(Object(a["unref"])(c["a"]))]})),default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])($,{key:"1",header:"数据处理"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",d,[Object(a["createVNode"])(R,null,{default:Object(a["withCtx"])((function(){return[b,Object(a["createVNode"])(Y,{checked:Object(a["unref"])(u).enabledShowHide,"onUpdate:checked":t[0]||(t[0]=function(e){return Object(a["unref"])(u).enabledShowHide=e}),onChange:L},{default:Object(a["withCtx"])((function(){return[f]})),_:1},8,["checked"])]})),_:1})]),Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(R,null,{default:Object(a["withCtx"])((function(){return[j,Object(a["createVNode"])(z,{onClick:X},{default:Object(a["withCtx"])((function(){return[O]})),_:1})]})),_:1})]),Object(a["createElementVNode"])("div",p,[Object(a["createVNode"])(l["a"])])]})),_:1}),Object(a["createVNode"])($,{key:"2",header:"参数调试"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",v,[Object(a["createVNode"])(R,null,{default:Object(a["withCtx"])((function(){return[m,Object(a["createVNode"])(q,{onChange:P,value:B.value,"onUpdate:value":t[1]||(t[1]=function(e){return B.value=e}),min:1,max:999999999,step:1},null,8,["value"])]})),_:1})]),Object(a["createElementVNode"])("div",h,[Object(a["createVNode"])(R,null,{default:Object(a["withCtx"])((function(){return[V,Object(a["createVNode"])(Q,{onChange:W,value:U.value,"onUpdate:value":t[2]||(t[2]=function(e){return U.value=e}),min:0,max:360,step:.01},null,8,["value","step"]),Object(a["createTextVNode"])("当前值"+Object(a["toDisplayString"])(U.value),1)]})),_:1})]),Object(a["createElementVNode"])("div",N,[Object(a["createVNode"])(R,null,{default:Object(a["withCtx"])((function(){return[C,Object(a["createVNode"])(Q,{onChange:J,value:H.value,"onUpdate:value":t[3]||(t[3]=function(e){return H.value=e}),min:0,max:360,step:.01},null,8,["value","step"]),Object(a["createTextVNode"])("当前值"+Object(a["toDisplayString"])(H.value),1)]})),_:1})]),Object(a["createElementVNode"])("div",w,[Object(a["createVNode"])(R,null,{default:Object(a["withCtx"])((function(){return[x,Object(a["createVNode"])(Q,{onChange:M,value:I.value,"onUpdate:value":t[4]||(t[4]=function(e){return I.value=e}),min:0,max:360,step:.01},null,8,["value","step"]),Object(a["createTextVNode"])("当前值"+Object(a["toDisplayString"])(I.value),1)]})),_:1})]),Object(a["createElementVNode"])("div",g,[Object(a["createVNode"])(R,null,{default:Object(a["withCtx"])((function(){return[k,Object(a["createVNode"])(Q,{onChange:F,value:D.value,"onUpdate:value":t[5]||(t[5]=function(e){return D.value=e}),min:0,max:89,step:.01},null,8,["value","step"]),Object(a["createTextVNode"])("当前值"+Object(a["toDisplayString"])(D.value),1)]})),_:1})]),Object(a["createElementVNode"])("div",_,[Object(a["createVNode"])(R,null,{default:Object(a["withCtx"])((function(){return[S,Object(a["createVNode"])(Q,{onChange:G,value:A.value,"onUpdate:value":t[6]||(t[6]=function(e){return A.value=e}),min:0,max:89,step:.01},null,8,["value","step"]),Object(a["createTextVNode"])("当前值"+Object(a["toDisplayString"])(A.value),1)]})),_:1})]),Object(a["createElementVNode"])("div",E,[Object(a["createVNode"])(R,null,{default:Object(a["withCtx"])((function(){return[y,Object(a["createVNode"])(Y,{onChange:K,checked:Object(a["unref"])(u).enabledShowScanPlane,"onUpdate:checked":t[7]||(t[7]=function(e){return Object(a["unref"])(u).enabledShowScanPlane=e})},{default:Object(a["withCtx"])((function(){return[T]})),_:1},8,["checked"])]})),_:1})])]})),_:1})]})),_:1},8,["activeKey"])]})),_:1})])]})),_:1}),Object(a["createVNode"])(r["a"])],64)}}}),U=(n("0fbb"),n("6b0d")),H=n.n(U);const I=H()(B,[["__scopeId","data-v-7036530b"]]);t["default"]=I},e64d:function(e,t,n){}}]);