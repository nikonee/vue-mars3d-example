(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46850272"],{"07dd":function(e,t,n){"use strict";n("f131")},"4c85":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=n("7544"),o=function(e){return Object(c["pushScopeId"])("data-v-824de3ae"),e=e(),Object(c["popScopeId"])(),e},l={class:"f-tac"},u=Object(c["createTextVNode"])("视频投放"),r=Object(c["createTextVNode"])("图片投放"),i=Object(c["createTextVNode"])("文本投放"),d=Object(c["createTextVNode"])("颜色投放"),b=Object(c["createTextVNode"])("清除"),f={class:"f-mb"},s=o((function(){return Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"混合系数:",-1)})),O=Object(c["createTextVNode"])("调整透明度 "),j={class:"f-mb"},p=o((function(){return Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"水平拉伸:",-1)})),v=Object(c["createTextVNode"])("调整水平拉伸 "),m={class:"f-mb"},V=o((function(){return Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"宽高比例:",-1)})),N=Object(c["createTextVNode"])("调整垂直拉伸 "),w={class:"f-mb"},C=o((function(){return Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"视椎框线:",-1)})),x=Object(c["createTextVNode"])("是否显示"),h={class:"f-mb"},k=o((function(){return Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"调整位置:",-1)})),_=Object(c["createTextVNode"])("相机"),E=Object(c["createTextVNode"])("视点"),T={class:"f-mb"},y=o((function(){return Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"键盘微调:",-1)})),g=Object(c["createTextVNode"])("相机跟随"),B={class:"f-tac"},S=Object(c["createTextVNode"])("播放暂停"),F=Object(c["createTextVNode"])("返回相机视点"),I=Object(c["createTextVNode"])("打印参数"),U=Object(c["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(c["ref"])(!1),o=Object(c["ref"])(!0),U=Object(c["ref"])(.5),H=Object(c["ref"])(.7),W=Object(c["ref"])(45),D=Object(c["ref"])(1.6);Object(c["onMounted"])((function(){t.bindEvnet(U.value)}));var X=function(){t.opacity(H.value)},Y=function(){t.cameraFov(W.value)},J=function(){t.cameraWidHei(D.value)},M=function(){t.cameraFollow(n.value)},P=function(){t.createViewForVideo(o.value,H.value)},z=function(){t.createViewForPicture(o.value,H.value)},L=function(){t.createText(o.value,H.value)},R=function(){t.createViewForColor(o.value,H.value)},$=function(){t.clearVideo()},q=function(){t.locate()},A=function(){t.printParameters()},G=function(){t.playOrpause()},K=function(){t.selCamera()},Q=function(){t.selView()},Z=function(){t.showFrustum(o.value)};return function(e,t){var ee=Object(c["resolveComponent"])("mars-button"),te=Object(c["resolveComponent"])("a-space"),ne=Object(c["resolveComponent"])("a-slider"),ce=Object(c["resolveComponent"])("a-checkbox"),ae=Object(c["resolveComponent"])("mars-input-number");return Object(c["openBlock"])(),Object(c["createBlock"])(a["a"],{class:"infoView"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(te,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(ee,{onClick:P},{default:Object(c["withCtx"])((function(){return[u]})),_:1}),Object(c["createVNode"])(ee,{onClick:z},{default:Object(c["withCtx"])((function(){return[r]})),_:1}),Object(c["createVNode"])(ee,{onClick:L},{default:Object(c["withCtx"])((function(){return[i]})),_:1}),Object(c["createVNode"])(ee,{onClick:R},{default:Object(c["withCtx"])((function(){return[d]})),_:1}),Object(c["createVNode"])(ee,{onClick:$},{default:Object(c["withCtx"])((function(){return[b]})),_:1})]})),_:1})]),Object(c["createElementVNode"])("div",f,[Object(c["createVNode"])(te,null,{default:Object(c["withCtx"])((function(){return[s,Object(c["createVNode"])(ne,{onChange:X,value:H.value,"onUpdate:value":t[0]||(t[0]=function(e){return H.value=e}),min:0,max:1,step:.1},null,8,["value","step"]),O]})),_:1})]),Object(c["createElementVNode"])("div",j,[Object(c["createVNode"])(te,null,{default:Object(c["withCtx"])((function(){return[p,Object(c["createVNode"])(ne,{onChange:Y,value:W.value,"onUpdate:value":t[1]||(t[1]=function(e){return W.value=e}),min:30,max:120,step:.1},null,8,["value","step"]),v]})),_:1})]),Object(c["createElementVNode"])("div",m,[Object(c["createVNode"])(te,null,{default:Object(c["withCtx"])((function(){return[V,Object(c["createVNode"])(ne,{onChange:J,value:D.value,"onUpdate:value":t[2]||(t[2]=function(e){return D.value=e}),min:.5,max:3,step:.05},null,8,["value","min","step"]),N]})),_:1})]),Object(c["createElementVNode"])("div",w,[Object(c["createVNode"])(te,null,{default:Object(c["withCtx"])((function(){return[C,Object(c["createVNode"])(ce,{onChange:Z,checked:o.value,"onUpdate:checked":t[3]||(t[3]=function(e){return o.value=e})},{default:Object(c["withCtx"])((function(){return[x]})),_:1},8,["checked"])]})),_:1})]),Object(c["createElementVNode"])("div",h,[Object(c["createVNode"])(te,null,{default:Object(c["withCtx"])((function(){return[k,Object(c["createVNode"])(ee,{onClick:K},{default:Object(c["withCtx"])((function(){return[_]})),_:1}),Object(c["createVNode"])(ee,{onClick:Q},{default:Object(c["withCtx"])((function(){return[E]})),_:1})]})),_:1})]),Object(c["createElementVNode"])("div",T,[Object(c["createVNode"])(te,null,{default:Object(c["withCtx"])((function(){return[y,Object(c["createVNode"])(ae,{min:.001,max:2,step:.001,value:U.value,"onUpdate:value":t[4]||(t[4]=function(e){return U.value=e})},null,8,["min","step","value"]),Object(c["createVNode"])(ce,{onChange:M,checked:n.value,"onUpdate:checked":t[5]||(t[5]=function(e){return n.value=e})},{default:Object(c["withCtx"])((function(){return[g]})),_:1},8,["checked"])]})),_:1})]),Object(c["createElementVNode"])("div",B,[Object(c["createVNode"])(te,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(ee,{onClick:G},{default:Object(c["withCtx"])((function(){return[S]})),_:1}),Object(c["createVNode"])(ee,{onClick:q},{default:Object(c["withCtx"])((function(){return[F]})),_:1}),Object(c["createVNode"])(ee,{onClick:A},{default:Object(c["withCtx"])((function(){return[I]})),_:1})]})),_:1})])]})),_:1})}}}),H=(n("07dd"),n("6b0d")),W=n.n(H);const D=W()(U,[["__scopeId","data-v-824de3ae"]]);t["default"]=D},"4e4b":function(e,t,n){"use strict";n("e64d")},7544:function(e,t,n){"use strict";var c=n("246f"),a=n("7a23"),o={class:"title"},l=Object(a["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,l=e,u=Object(a["ref"])(),r=function(){n("update:visible",!1)};function i(e){var t=e.clientX,n=e.clientY;function c(e){var c=u.value,o=e.clientX-t,l=e.clientY-n;a(c,c.offsetLeft+o,c.offsetTop+l,e)}function a(e,c,a,o){var u=document.getElementById(l.warpper);c>0&&c+e.offsetWidth<u.offsetWidth&&(e.style.left=c+"px",t=o.clientX),a>0&&a+e.offsetHeight<u.offsetHeight&&(e.style.top=a+"px",n=o.clientY)}window.onmousemove=function(e){e.preventDefault(),c(e)},window.onmouseup=function(e){c(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===l.type}]),ref_key:"pannelBox",ref:u},["model"===l.type?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:i},[Object(a["createElementVNode"])("span",o,Object(a["toDisplayString"])(e.title),1),Object(a["createVNode"])(Object(a["unref"])(c["a"]),{onClick:r,class:"close-btn"})],544)):Object(a["createCommentVNode"])("",!0),Object(a["renderSlot"])(t.$slots,"default")],2)),[[a["vShow"],"pannel"===l.type||e.visible]])}}}),u=(n("4e4b"),n("6b0d")),r=n.n(u);const i=r()(l,[["__scopeId","data-v-b885d716"]]);t["a"]=i},e64d:function(e,t,n){},f131:function(e,t,n){}}]);