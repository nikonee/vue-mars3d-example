(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f81eff8"],{"4e4b":function(e,t,a){"use strict";a("e64d")},7544:function(e,t,a){"use strict";var n=a("246f"),c=a("7a23"),o={class:"title"},i=Object(c["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var a=t.emit,i=e,l=Object(c["ref"])(),r=function(){a("update:visible",!1)};function d(e){var t=e.clientX,a=e.clientY;function n(e){var n=l.value,o=e.clientX-t,i=e.clientY-a;c(n,n.offsetLeft+o,n.offsetTop+i,e)}function c(e,n,c,o){var l=document.getElementById(i.warpper);n>0&&n+e.offsetWidth<l.offsetWidth&&(e.style.left=n+"px",t=o.clientX),c>0&&c+e.offsetHeight<l.offsetHeight&&(e.style.top=c+"px",a=o.clientY)}window.onmousemove=function(e){e.preventDefault(),n(e)},window.onmouseup=function(e){n(e),window.onmousemove=null,window.onmouseup=null}}return function(t,a){return Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===i.type}]),ref_key:"pannelBox",ref:l},["model"===i.type?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:d},[Object(c["createElementVNode"])("span",o,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])(Object(c["unref"])(n["a"]),{onClick:r,class:"close-btn"})],544)):Object(c["createCommentVNode"])("",!0),Object(c["renderSlot"])(t.$slots,"default")],2)),[[c["vShow"],"pannel"===i.type||e.visible]])}}}),l=(a("4e4b"),a("6b0d")),r=a.n(l);const d=r()(i,[["__scopeId","data-v-b885d716"]]);t["a"]=d},c4a1:function(e,t,a){"use strict";a("e6ee")},e64d:function(e,t,a){},e6ee:function(e,t,a){},f492:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c=a("7544"),o=Object(n["createTextVNode"])("开始"),i=Object(n["createTextVNode"])("停止"),l=Object(n["createStaticVNode"])('<div class="infoview-js" data-v-7baa298c><div class="infoview_panel" data-v-7baa298c><div class="infoview_panel_scroll" data-v-7baa298c><div class="title" data-v-7baa298c>合肥火星科技有限公司</div><div data-v-7baa298c><label data-v-7baa298c>公司简介:</label><span data-v-7baa298c>合肥火星科技有限公司（简称：火星科技），于2017年在安徽合肥成立，自成立以来，公司致力于三维可视化技术和GIS地理信息技术的研究与探索，公司耕耘在军工、航天、仿真、智慧城市等行业领域，主营业务模式围绕Mars2D、Mars3D系列平台级产品展开，持续为客户提供着自主可控、专业高效、具备可视化行业前沿科技的产品解决方案与服务。</span></div><div data-v-7baa298c><label data-v-7baa298c>公司资质:</label><span data-v-7baa298c> 公司围绕三维可视化领域已取得软件著作权和专利30多项，属于国家高新技术企业、“双软”认定企业、合肥市大数据企业、中国软件协会认定的AAA 信用企业、已通过ISO9001质量管理体系认证。</span></div><div data-v-7baa298c><label data-v-7baa298c>主要产品:</label><span data-v-7baa298c>Mars3D是火星科技研发的一款基于 WebGL 技术实现的三维客户端开发平台，基于Cesium优化提升与B/S架构设计，支持多行业扩展的轻量级高效能GIS开发平台，能够免安装、无插件地在浏览器中高效运行，并可快速接入与使用多种GIS数据和三维模型，呈现三维空间的可视化，完成平台在不同行业的灵活应用。</span></div></div></div></div>',1),r={class:"btnBar"},d=Object(n["createTextVNode"])("公司简介"),s=Object(n["createTextVNode"])("公司项目"),b=Object(n["createTextVNode"])("主要产品"),u=Object(n["defineComponent"])({setup:function(e){var t=window.mapWork,a=function(){t.startRotate()},u=function(){t.stopRotate()};return function(e,t){var f=Object(n["resolveComponent"])("mars-button"),p=Object(n["resolveComponent"])("a-space");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(c["a"],{class:"infoView"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{onClick:a},{default:Object(n["withCtx"])((function(){return[o]})),_:1}),Object(n["createVNode"])(f,{onClick:u},{default:Object(n["withCtx"])((function(){return[i]})),_:1})]})),_:1})]})),_:1}),l,Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(f,{class:"btnbar_item",href:"https://mars3d.cn/",target:"_blank"},{default:Object(n["withCtx"])((function(){return[d]})),_:1}),Object(n["createVNode"])(f,{class:"btnbar_item",href:"https://mars3d.cn/template.html",target:"_blank"},{default:Object(n["withCtx"])((function(){return[s]})),_:1}),Object(n["createVNode"])(f,{class:"btnbar_item",href:"https://mars3d.cn/example.html",target:"_blank"},{default:Object(n["withCtx"])((function(){return[b]})),_:1})])],64)}}}),f=(a("c4a1"),a("6b0d")),p=a.n(f);const v=p()(u,[["__scopeId","data-v-7baa298c"]]);t["default"]=v}}]);