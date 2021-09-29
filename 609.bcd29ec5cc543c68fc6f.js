"use strict";(self.webpackChunkmy_work_zone=self.webpackChunkmy_work_zone||[]).push([[609],{5609:(I,f,h)=>{h.d(f,{zH:()=>g,e4:()=>B});var t=h(793),d=h(6083),p=h(2057),m=h(1818),C=h(3738),_=h(6988),v=h(3013);const k=["container"],b=["input"],M=["colorSelector"],w=["colorHandle"],x=["hue"],y=["hueHandle"],H=function(n){return{"p-disabled":n}};function T(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"input",4,5),t.NdJ("focus",function(){return t.CHM(e),t.oxw().onInputFocus()})("click",function(){return t.CHM(e),t.oxw().onInputClick()})("keydown",function(o){return t.CHM(e),t.oxw().onInputKeydown(o)}),t.qZA()}if(2&n){const e=t.oxw();t.Udp("background-color",e.inputBgColor),t.Q6J("ngClass",t.VKq(6,H,e.disabled))("disabled",e.disabled),t.uIk("id",e.inputId)("tabindex",e.tabindex)}}const E=function(n,l){return{"p-colorpicker-panel":!0,"p-colorpicker-overlay-panel":n,"p-disabled":l}},D=function(n,l){return{showTransitionParams:n,hideTransitionParams:l}},L=function(n){return{value:"visible",params:n}};function S(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"div",6),t.NdJ("click",function(o){return t.CHM(e),t.oxw().onOverlayClick(o)})("@overlayAnimation.start",function(o){return t.CHM(e),t.oxw().onOverlayAnimationStart(o)})("@overlayAnimation.done",function(o){return t.CHM(e),t.oxw().onOverlayAnimationEnd(o)}),t.TgZ(1,"div",7),t.TgZ(2,"div",8,9),t.NdJ("touchstart",function(o){return t.CHM(e),t.oxw().onColorTouchStart(o)})("touchmove",function(o){return t.CHM(e),t.oxw().onMove(o)})("touchend",function(){return t.CHM(e),t.oxw().onDragEnd()})("mousedown",function(o){return t.CHM(e),t.oxw().onColorMousedown(o)}),t.TgZ(4,"div",10),t._UZ(5,"div",11,12),t.qZA(),t.qZA(),t.TgZ(7,"div",13,14),t.NdJ("mousedown",function(o){return t.CHM(e),t.oxw().onHueMousedown(o)})("touchstart",function(o){return t.CHM(e),t.oxw().onHueTouchStart(o)})("touchmove",function(o){return t.CHM(e),t.oxw().onMove(o)})("touchend",function(){return t.CHM(e),t.oxw().onDragEnd()}),t._UZ(9,"div",15,16),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("ngClass",t.WLB(3,E,!e.inline,e.disabled))("@overlayAnimation",t.VKq(9,L,t.WLB(6,D,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",!0===e.inline)}}const P=function(n,l){return{"p-colorpicker p-component":!0,"p-colorpicker-overlay":n,"p-colorpicker-dragging":l}},O={provide:C.JU,useExisting:(0,t.Gpc)(()=>g),multi:!0};let g=(()=>{class n{constructor(e,i,o,r,s){this.el=e,this.renderer=i,this.cd=o,this.config=r,this.overlayService=s,this.format="hex",this.autoZIndex=!0,this.baseZIndex=0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.onChange=new t.vpe,this.onShow=new t.vpe,this.onHide=new t.vpe,this.value={h:0,s:100,b:100},this.defaultColor="ff0000",this.onModelChange=()=>{},this.onModelTouched=()=>{}}set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}onHueMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueTouchStart(e){this.disabled||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorTouchStart(e){this.disabled||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]))}pickHue(e,i){let o=i?i.pageY:e.pageY,r=this.hueViewChild.nativeElement.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,o-r)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onMove(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,i){let o=i?i.pageX:e.pageX,r=i?i.pageY:e.pageY,s=this.colorSelectorViewChild.nativeElement.getBoundingClientRect(),a=s.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),c=s.left+document.body.scrollLeft,u=Math.floor(100*Math.max(0,Math.min(150,o-c))/150),R=Math.floor(100*(150-Math.max(0,Math.min(150,r-a)))/150);this.value=this.validateHSB({h:this.value.h,s:u,b:R}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format){case"hex":e="#"+this.HSBtoHEX(this.value);break;case"rgb":e=this.HSBtoRGB(this.value);break;case"hsb":e=this.value}return e}updateModel(){this.onModelChange(this.getValueToUpdate())}writeValue(e){if(e)switch(this.format){case"hex":this.value=this.HEXtoHSB(e);break;case"rgb":this.value=this.RGBtoHSB(e);break;case"hsb":this.value=e}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){const e={s:100,b:100};e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.inline||(this.overlay=e.element,this.appendOverlay(),this.autoZIndex&&_.P9.set("overlay",this.overlay,this.config.zIndex.overlay),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.updateColorSelector(),this.updateUI());break;case"void":this.onOverlayHide()}}onOverlayAnimationEnd(e){switch(e.toState){case"visible":this.inline||this.onShow.emit({});break;case"void":this.autoZIndex&&_.P9.clear(e.element),this.onHide.emit({})}}appendOverlay(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.overlay):m.p.appendChild(this.overlay,this.appendTo))}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.el.nativeElement.appendChild(this.overlay)}alignOverlay(){this.appendTo?m.p.absolutePosition(this.overlay,this.inputViewChild.nativeElement):m.p.relativePosition(this.overlay,this.inputViewChild.nativeElement)}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.selfClick=!0,this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.which){case 32:this.togglePanel(),e.preventDefault();break;case 27:case 9:this.hide()}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","click",()=>{this.selfClick||(this.overlayVisible=!1,this.unbindDocumentClickListener()),this.selfClick=!1,this.cd.markForCheck()}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentMousemoveListener(){this.documentMousemoveListener||(this.documentMousemoveListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","mousemove",i=>{this.colorDragging&&this.pickColor(i),this.hueDragging&&this.pickHue(i)}))}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){this.documentMouseupListener||(this.documentMouseupListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}))}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}onWindowResize(){this.hide()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new m.V(this.containerViewChild.nativeElement,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){var i=6-e.length;if(i>0){for(var o=[],r=0;r<i;r++)o.push("0");o.push(e),e=o.join("")}return e}HEXtoRGB(e){let i=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:i>>16,g:(65280&i)>>8,b:255&i}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){var i={h:0,s:0,b:0},o=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b),s=r-o;return i.b=r,i.s=0!=r?255*s/r:0,i.h=0!=i.s?e.r==r?(e.g-e.b)/s:e.g==r?2+(e.b-e.r)/s:4+(e.r-e.g)/s:-1,i.h*=60,i.h<0&&(i.h+=360),i.s*=100/255,i.b*=100/255,i}HSBtoRGB(e){var i={r:null,g:null,b:null};let o=e.h,r=255*e.s/100,s=255*e.b/100;if(0==r)i={r:s,g:s,b:s};else{let a=s,c=(255-r)*s/255,u=o%60*(a-c)/60;360==o&&(o=0),o<60?(i.r=a,i.b=c,i.g=c+u):o<120?(i.g=a,i.b=c,i.r=a-u):o<180?(i.g=a,i.r=c,i.b=c+u):o<240?(i.b=a,i.r=c,i.g=a-u):o<300?(i.b=a,i.g=c,i.r=c+u):o<360?(i.r=a,i.g=c,i.b=a-u):(i.r=0,i.g=0,i.b=0)}return{r:Math.round(i.r),g:Math.round(i.g),b:Math.round(i.b)}}RGBtoHEX(e){var i=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var o in i)1==i[o].length&&(i[o]="0"+i[o]);return i.join("")}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onOverlayHide(){this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.unbindDocumentClickListener(),this.overlay=null}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&this.autoZIndex&&_.P9.clear(this.overlay),this.restoreOverlayAppend(),this.onOverlayHide()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(v.b4),t.Y36(v.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["p-colorPicker"]],viewQuery:function(e,i){if(1&e&&(t.Gf(k,5),t.Gf(b,5),t.Gf(M,5),t.Gf(w,5),t.Gf(x,5),t.Gf(y,5)),2&e){let o;t.iGM(o=t.CRH())&&(i.containerViewChild=o.first),t.iGM(o=t.CRH())&&(i.inputViewChild=o.first),t.iGM(o=t.CRH())&&(i.colorSelector=o.first),t.iGM(o=t.CRH())&&(i.colorHandle=o.first),t.iGM(o=t.CRH())&&(i.hue=o.first),t.iGM(o=t.CRH())&&(i.hueHandle=o.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",inline:"inline",format:"format",appendTo:"appendTo",disabled:"disabled",tabindex:"tabindex",inputId:"inputId",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onChange:"onChange",onShow:"onShow",onHide:"onHide"},features:[t._Bn([O])],decls:4,vars:9,consts:[[3,"ngStyle","ngClass"],["container",""],["type","text","class","p-colorpicker-preview p-inputtext","readonly","readonly",3,"ngClass","disabled","backgroundColor","focus","click","keydown",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["type","text","readonly","readonly",1,"p-colorpicker-preview","p-inputtext",3,"ngClass","disabled","focus","click","keydown"],["input",""],[3,"ngClass","click"],[1,"p-colorpicker-content"],[1,"p-colorpicker-color-selector",3,"touchstart","touchmove","touchend","mousedown"],["colorSelector",""],[1,"p-colorpicker-color"],[1,"p-colorpicker-color-handle"],["colorHandle",""],[1,"p-colorpicker-hue",3,"mousedown","touchstart","touchmove","touchend"],["hue",""],[1,"p-colorpicker-hue-handle"],["hueHandle",""]],template:function(e,i){1&e&&(t.TgZ(0,"div",0,1),t.YNc(2,T,2,8,"input",2),t.YNc(3,S,11,11,"div",3),t.qZA()),2&e&&(t.Tol(i.styleClass),t.Q6J("ngStyle",i.style)("ngClass",t.WLB(6,P,!i.inline,i.colorDragging||i.hueDragging)),t.xp6(2),t.Q6J("ngIf",!i.inline),t.xp6(1),t.Q6J("ngIf",i.inline||i.overlayVisible))},directives:[p.PC,p.mk,p.O5],styles:[".p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{position:relative;width:193px;height:166px}.p-colorpicker-overlay-panel{position:absolute;top:0;left:0}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{width:150px;height:150px;top:8px;left:8px;position:absolute}.p-colorpicker-panel .p-colorpicker-color{width:150px;height:150px}.p-colorpicker-panel .p-colorpicker-color-handle{position:absolute;top:0;left:150px;border-radius:100%;width:10px;height:10px;border-width:1px;border-style:solid;margin:-5px 0 0 -5px;cursor:pointer;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue{width:17px;height:150px;top:8px;left:167px;position:absolute;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue-handle{position:absolute;top:150px;left:0;width:21px;margin-left:-2px;margin-top:-5px;height:10px;border-width:2px;border-style:solid;opacity:.85;cursor:pointer}"],encapsulation:2,data:{animation:[(0,d.X$)("overlayAnimation",[(0,d.eR)(":enter",[(0,d.oB)({opacity:0,transform:"scaleY(0.8)"}),(0,d.jt)("{{showTransitionParams}}")]),(0,d.eR)(":leave",[(0,d.jt)("{{hideTransitionParams}}",(0,d.oB)({opacity:0}))])])]},changeDetection:0}),n})(),B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez]]}),n})()}}]);