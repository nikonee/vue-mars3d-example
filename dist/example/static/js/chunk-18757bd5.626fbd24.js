(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18757bd5"],{"4e4b":function(e,t,n){"use strict";n("e64d")},5482:function(e,t,n){"use strict";n("d629")},7544:function(e,t,n){"use strict";var c=n("246f"),o=n("7a23"),a={class:"title"},i=Object(o["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,i=e,r=Object(o["ref"])(),l=function(){n("update:visible",!1)};function u(e){var t=e.clientX,n=e.clientY;function c(e){var c=r.value,a=e.clientX-t,i=e.clientY-n;o(c,c.offsetLeft+a,c.offsetTop+i,e)}function o(e,c,o,a){var r=document.getElementById(i.warpper);c>0&&c+e.offsetWidth<r.offsetWidth&&(e.style.left=c+"px",t=a.clientX),o>0&&o+e.offsetHeight<r.offsetHeight&&(e.style.top=o+"px",n=a.clientY)}window.onmousemove=function(e){e.preventDefault(),c(e)},window.onmouseup=function(e){c(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===i.type}]),ref_key:"pannelBox",ref:r},["model"===i.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:u},[Object(o["createElementVNode"])("span",a,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])(Object(o["unref"])(c["a"]),{onClick:l,class:"close-btn"})],544)):Object(o["createCommentVNode"])("",!0),Object(o["renderSlot"])(t.$slots,"default")],2)),[[o["vShow"],"pannel"===i.type||e.visible]])}}}),r=(n("4e4b"),n("6b0d")),l=n.n(r);const u=l()(i,[["__scopeId","data-v-b885d716"]]);t["a"]=u},a339:function(e,t,n){"use strict";n.r(t);var c=n("f59e"),o=n("49e6"),a=(n("d81d"),n("4de4"),n("d3b7"),n("b0c0"),n("7a23")),i=n("7544"),r={class:"f-mb"},l=Object(a["createTextVNode"])("绘制矩形"),u=Object(a["createTextVNode"])("绘制剪裁区"),d=Object(a["createTextVNode"])("清除"),f={class:"f-mb"},b=Object(a["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(a["ref"])([{title:"裁剪区",dataIndex:"name",key:"name"},{title:"操作",dataIndex:"caozuo",key:"caozuo",width:80}]),b=Object(a["ref"])([]);Object(a["onMounted"])((function(){window.$notify("已知问题提示","（1）对3dtiles数据有要求，仅适用于无自带着色器的纹理格式模型。\n  （2）目前不支持所有3dtile数据，请替换url进行自测",{duration:null}),t.eventTarget.on("dataLoaded",(function(e){b.value=e.list.map((function(e){return{key:e.id-1,name:"裁剪区"+e.id,graphicId:e.id}}))})),t.eventTarget.on("addItem",(function(e){var t=e.item;b.value.push({key:t.id-1,name:"裁剪区"+t.id,graphicId:t.id})}))}));var s=function(e){t.flyToGraphic(e.graphicId)},p=function(e){t.deletedGraphic(e.graphicId),b.value=b.value.filter((function(t){return t.key!==e.key}))},j=function(){t.btnDrawExtent()},O=function(){t.btnDraw()},m=function(){t.removeAll(),b.value=[]};return function(e,t){var v=Object(a["resolveComponent"])("mars-button"),w=Object(a["resolveComponent"])("a-space"),k=Object(a["resolveComponent"])("a-table");return Object(a["openBlock"])(),Object(a["createBlock"])(i["a"],{class:"infoView"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(w,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(v,{onClick:j},{default:Object(a["withCtx"])((function(){return[l]})),_:1}),Object(a["createVNode"])(v,{onClick:O},{default:Object(a["withCtx"])((function(){return[u]})),_:1}),Object(a["createVNode"])(v,{onClick:m},{default:Object(a["withCtx"])((function(){return[d]})),_:1})]})),_:1})]),Object(a["createElementVNode"])("div",f,[Object(a["createVNode"])(k,{pagination:!1,dataSource:b.value,columns:n.value,size:"small",bordered:""},{bodyCell:Object(a["withCtx"])((function(e){var t=e.column,n=e.record;return["caozuo"===t.key?(Object(a["openBlock"])(),Object(a["createBlock"])(w,{key:0},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(v,{type:"link"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(Object(a["unref"])(o["a"]),{fill:"#FFF",onClick:function(e){return s(n)}},null,8,["onClick"])]})),_:2},1024),Object(a["createVNode"])(v,{type:"link"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(Object(a["unref"])(c["a"]),{fill:"#FFF",onClick:function(e){return p(n)}},null,8,["onClick"])]})),_:2},1024)]})),_:2},1024)):(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:1},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.name),1)],64))]})),_:1},8,["dataSource","columns"])])]})),_:1})}}}),s=(n("5482"),n("6b0d")),p=n.n(s);const j=p()(b,[["__scopeId","data-v-43e8db06"]]);t["default"]=j},d629:function(e,t,n){},d81d:function(e,t,n){"use strict";var c=n("23e7"),o=n("b727").map,a=n("1dde"),i=a("map");c({target:"Array",proto:!0,forced:!i},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},e64d:function(e,t,n){}}]);