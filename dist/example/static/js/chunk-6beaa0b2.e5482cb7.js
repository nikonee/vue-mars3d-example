(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6beaa0b2"],{1998:function(e,t,n){"use strict";n.r(t);n("d3b7"),n("159b"),n("b64b"),n("d81d"),n("b0c0"),n("4de4");var i=n("7a23"),o=n("7544"),a=Object(i["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(i["ref"])([]),a=Object(i["ref"])([]),c=Object(i["ref"])([]),r={};t.eventTarget.on("loadOK",(function(){u()}));var d=function(e){Object.keys(r).forEach((function(t){var n=-1!==e.indexOf(t),i=r[t];i.show=n,n&&(i.isAdded||window.mapWork.map.addLayer(i),i.flyTo())}))};function u(){for(var e=window.mapWork.map.getLayers({basemaps:!0,layers:!0}),t=e.length-1;t>=0;t--){var i=e[t];if(i&&-1===i.pid){var o={title:i.name,key:i.uuid,id:i.id,pId:i.pid,uuid:i.uuid};o.children=l(o,e),n.value.push(o),r[i.uuid]=i,a.value.push(o.key)}}}function l(e,t){return t.filter((function(t){return t.pid===e.id})).map((function(n){if(n.pid=e.id){var i={title:n.name,key:n.uuid,id:n.id,pId:n.pid,uuid:n.uuid};return r[n.uuid]=n,n.hasChildLayer&&(i.children=l(i,t)),n.isAdded&&n.show&&c.value.push(i.key),i}}))}return function(e,t){var r=Object(i["resolveComponent"])("mars-tree"),u=Object(i["resolveDirective"])("auto-height");return Object(i["withDirectives"])((Object(i["openBlock"])(),Object(i["createBlock"])(o["a"],{class:"infoView manager-pannel"},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(r,{checkable:"","tree-data":n.value,expandedKeys:a.value,"onUpdate:expandedKeys":t[0]||(t[0]=function(e){return a.value=e}),checkedKeys:c.value,"onUpdate:checkedKeys":t[1]||(t[1]=function(e){return c.value=e}),onCheck:d},{title:Object(i["withCtx"])((function(e){var t=e.title;return[Object(i["createElementVNode"])("span",null,Object(i["toDisplayString"])(t),1)]})),_:1},8,["tree-data","expandedKeys","checkedKeys"])]})),_:1})),[[u,100]])}}}),c=(n("64be"),n("6b0d")),r=n.n(c);const d=r()(a,[["__scopeId","data-v-778ac196"]]);t["default"]=d},"4e4b":function(e,t,n){"use strict";n("e64d")},"64be":function(e,t,n){"use strict";n("bb58f")},7544:function(e,t,n){"use strict";var i=n("246f"),o=n("7a23"),a={class:"title"},c=Object(o["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,c=e,r=Object(o["ref"])(),d=function(){n("update:visible",!1)};function u(e){var t=e.clientX,n=e.clientY;function i(e){var i=r.value,a=e.clientX-t,c=e.clientY-n;o(i,i.offsetLeft+a,i.offsetTop+c,e)}function o(e,i,o,a){var r=document.getElementById(c.warpper);i>0&&i+e.offsetWidth<r.offsetWidth&&(e.style.left=i+"px",t=a.clientX),o>0&&o+e.offsetHeight<r.offsetHeight&&(e.style.top=o+"px",n=a.clientY)}window.onmousemove=function(e){e.preventDefault(),i(e)},window.onmouseup=function(e){i(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===c.type}]),ref_key:"pannelBox",ref:r},["model"===c.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:u},[Object(o["createElementVNode"])("span",a,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])(Object(o["unref"])(i["a"]),{onClick:d,class:"close-btn"})],544)):Object(o["createCommentVNode"])("",!0),Object(o["renderSlot"])(t.$slots,"default")],2)),[[o["vShow"],"pannel"===c.type||e.visible]])}}}),r=(n("4e4b"),n("6b0d")),d=n.n(r);const u=d()(c,[["__scopeId","data-v-b885d716"]]);t["a"]=u},bb58f:function(e,t,n){},d81d:function(e,t,n){"use strict";var i=n("23e7"),o=n("b727").map,a=n("1dde"),c=a("map");i({target:"Array",proto:!0,forced:!c},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},e64d:function(e,t,n){}}]);