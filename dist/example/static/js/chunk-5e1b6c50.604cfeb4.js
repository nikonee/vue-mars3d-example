(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e1b6c50"],{"4e4b":function(e,t,n){"use strict";n("e64d")},6240:function(e,t,n){},7544:function(e,t,n){"use strict";var c=n("246f"),o=n("7a23"),a={class:"title"},i=Object(o["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,i=e,r=Object(o["ref"])(),u=function(){n("update:visible",!1)};function l(e){var t=e.clientX,n=e.clientY;function c(e){var c=r.value,a=e.clientX-t,i=e.clientY-n;o(c,c.offsetLeft+a,c.offsetTop+i,e)}function o(e,c,o,a){var r=document.getElementById(i.warpper);c>0&&c+e.offsetWidth<r.offsetWidth&&(e.style.left=c+"px",t=a.clientX),o>0&&o+e.offsetHeight<r.offsetHeight&&(e.style.top=o+"px",n=a.clientY)}window.onmousemove=function(e){e.preventDefault(),c(e)},window.onmouseup=function(e){c(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===i.type}]),ref_key:"pannelBox",ref:r},["model"===i.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:l},[Object(o["createElementVNode"])("span",a,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])(Object(o["unref"])(c["a"]),{onClick:u,class:"close-btn"})],544)):Object(o["createCommentVNode"])("",!0),Object(o["renderSlot"])(t.$slots,"default")],2)),[[o["vShow"],"pannel"===i.type||e.visible]])}}}),r=(n("4e4b"),n("6b0d")),u=n.n(r);const l=u()(i,[["__scopeId","data-v-b885d716"]]);t["a"]=l},"8f7c":function(e,t,n){"use strict";n.r(t);var c=n("f59e"),o=n("49e6"),a=(n("d81d"),n("4de4"),n("d3b7"),n("b0c0"),n("7a23")),i=n("7544"),r=function(e){return Object(a["pushScopeId"])("data-v-0c63b831"),e=e(),Object(a["popScopeId"])(),e},u=Object(a["createTextVNode"])("绘制矩形"),l=Object(a["createTextVNode"])("绘制多边行"),d=Object(a["createTextVNode"])("清除"),f=r((function(){return Object(a["createElementVNode"])("p",null,"（米）",-1)})),b=Object(a["createTextVNode"])(" 显示测试边界线 "),p=Object(a["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(a["reactive"])({enabledBianJieXian:!0,flatHeight:0}),r=Object(a["ref"])([{title:"压平区",dataIndex:"name",key:"name"},{title:"操作",dataIndex:"caozuo",key:"caozuo",width:100}]),p=Object(a["ref"])([]);Object(a["onMounted"])((function(){window.$notify("已知问题提示","（1）对3dtiles数据有要求，仅适用于无自带着色器的纹理格式模型。\n    （2）目前不支持所有3dtile数据，请替换url进行自测",{duration:null}),t.eventTarget.on("dataLoaded",(function(e){p.value=e.list.map((function(e){return{key:e.id-1,name:"压平区"+e.id,graphicId:e.id}}))})),t.eventTarget.on("addItem",(function(e){var t=e.item;p.value.push({key:t.id-1,name:"压平区"+t.id,graphicId:t.id})}))}));var j=function(e){t.flyToGraphic(e.graphicId)},s=function(e){t.deletedGraphic(e.graphicId),p.value=p.value.filter((function(t){return t.key!==e.key}))},O=function(){t.chkShowLine(n.enabledBianJieXian)},m=function(){t.btnDrawExtent(n.enabledBianJieXian)},h=function(){t.btnDraw(n.enabledBianJieXian)},v=function(){t.removeAll(),p.value=[]},w=function(){t.changeFlatHeight(n.flatHeight)};return function(e,t){var C=Object(a["resolveComponent"])("a-form-item"),k=Object(a["resolveComponent"])("a-col"),x=Object(a["resolveComponent"])("mars-button"),V=Object(a["resolveComponent"])("a-space"),N=Object(a["resolveComponent"])("mars-input-number"),y=Object(a["resolveComponent"])("a-checkbox"),g=Object(a["resolveComponent"])("a-table"),_=Object(a["resolveComponent"])("a-row");return Object(a["openBlock"])(),Object(a["createBlock"])(i["a"],{class:"infoView"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(_,{gutter:[5,10]},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(k,{span:5},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,{label:"开挖区域"})]})),_:1}),Object(a["createVNode"])(k,{span:19},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(V,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(x,{onClick:m},{default:Object(a["withCtx"])((function(){return[u]})),_:1}),Object(a["createVNode"])(x,{onClick:h},{default:Object(a["withCtx"])((function(){return[l]})),_:1}),Object(a["createVNode"])(x,{onClick:v},{default:Object(a["withCtx"])((function(){return[d]})),_:1})]})),_:1})]})),_:1}),Object(a["createVNode"])(k,{span:5},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,{label:"压平区高度:"})]})),_:1}),Object(a["createVNode"])(k,{span:16},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(N,{value:Object(a["unref"])(n).flatHeight,"onUpdate:value":t[0]||(t[0]=function(e){return Object(a["unref"])(n).flatHeight=e}),onChange:w,step:.1},null,8,["value","step"])]})),_:1}),Object(a["createVNode"])(k,{span:3,class:"miFont"},{default:Object(a["withCtx"])((function(){return[f]})),_:1}),Object(a["createVNode"])(k,{span:21},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(y,{checked:Object(a["unref"])(n).enabledBianJieXian,"onUpdate:checked":t[1]||(t[1]=function(e){return Object(a["unref"])(n).enabledBianJieXian=e}),onChange:O},{default:Object(a["withCtx"])((function(){return[b]})),_:1},8,["checked"])]})),_:1})]})),_:1}),Object(a["createVNode"])(k,{span:24},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(g,{pagination:!1,dataSource:p.value,columns:r.value,size:"small",bordered:""},{bodyCell:Object(a["withCtx"])((function(e){var t=e.column,n=e.record;return["caozuo"===t.key?(Object(a["openBlock"])(),Object(a["createBlock"])(V,{key:0},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(x,{type:"link"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(Object(a["unref"])(o["a"]),{fill:"#FFF",onClick:function(e){return j(n)}},null,8,["onClick"])]})),_:2},1024),Object(a["createVNode"])(x,{type:"link"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(Object(a["unref"])(c["a"]),{fill:"#FFF",onClick:function(e){return s(n)}},null,8,["onClick"])]})),_:2},1024)]})),_:2},1024)):(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:1},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.name),1)],64))]})),_:1},8,["dataSource","columns"])]})),_:1})]})),_:1})]})),_:1})}}}),j=(n("fdef"),n("6b0d")),s=n.n(j);const O=s()(p,[["__scopeId","data-v-0c63b831"]]);t["default"]=O},d81d:function(e,t,n){"use strict";var c=n("23e7"),o=n("b727").map,a=n("1dde"),i=a("map");c({target:"Array",proto:!0,forced:!i},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},e64d:function(e,t,n){},fdef:function(e,t,n){"use strict";n("6240")}}]);