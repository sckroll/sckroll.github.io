(window.webpackJsonp=window.webpackJsonp||[]).push([[37,35],{349:function(t,o,e){var content=e(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("035a164c",content,!0,{sourceMap:!1})},354:function(t,o,e){"use strict";e.r(o);var n={props:{toc:{type:Array,required:!0},mobile:{type:Boolean,default:!1}},methods:{handleScroll:function(t){if(this.$route.hash){var o=document.querySelector("#".concat(t));o&&window.scrollTo({top:o.getBoundingClientRect().top+window.pageYOffset})}}}},c=(e(361),e(2)),component=Object(c.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("nav",{staticClass:"toc-body",class:{"click-block":t.mobile}},t._l(t.toc,(function(link){return e("div",{key:link.id,staticClass:"toc-list",class:{"click-block":t.mobile}},[e("div",{staticClass:"toc-item",class:{toc2:2===link.depth,toc3:3===link.depth,"click-block":t.mobile}},[e("TextLink",{attrs:{to:"#"+link.id},nativeOn:{click:function(o){return t.handleScroll(link.id)}}},[t._v("\n        "+t._s(link.text)+"\n      ")])],1)])})),0)}),[],!1,null,"d951fa60",null);o.default=component.exports;installComponents(component,{TextLink:e(118).default})},360:function(t,o,e){var content=e(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("58a73ee2",content,!0,{sourceMap:!1})},361:function(t,o,e){"use strict";e(349)},362:function(t,o,e){var n=e(15)(!1);n.push([t.i,'[data-v-d951fa60]:export{breakpointXl:1200px;breakpointLg:992px;breakpointMd:768px;breakpointSm:576px}.toc-item[data-v-d951fa60]{display:flex;align-items:center;font-weight:500}.toc3[data-v-d951fa60]{font-size:.8em;margin-left:16px}.toc3[data-v-d951fa60]:before{content:"-";margin-right:4px;margin-bottom:3px}',""]),t.exports=n},379:function(t,o,e){"use strict";e(360)},380:function(t,o,e){var n=e(15)(!1);n.push([t.i,'[data-v-32f33ba4]:export{breakpointXl:1200px;breakpointLg:992px;breakpointMd:768px;breakpointSm:576px}.toc-mobile-button[data-v-32f33ba4]{cursor:pointer;z-index:1;position:fixed;bottom:32px;right:32px;padding:8px 16px;background-color:hsla(0,0%,100%,.7);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);box-shadow:0 1px 2px 1px rgba(0,0,0,.2);font-size:1.25em;transition:all .15s ease}.toc-mobile-button[data-v-32f33ba4]:hover{box-shadow:0 2px 4px 2px rgba(0,0,0,.15);transition:all .15s ease}.post-mobile-toc[data-v-32f33ba4]{z-index:1;position:fixed;right:32px;bottom:96px;padding:16px;background-color:hsla(0,0%,100%,.7);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);box-shadow:0 1px 2px 1px rgba(0,0,0,.2)}.toc-list .toc-item[data-v-32f33ba4]{width:100%;margin:8px 0}.toc-list .toc-text[data-v-32f33ba4]{padding:2px 0;border-bottom:2px solid transparent;transition:all .15s ease}.toc-list .toc-text[data-v-32f33ba4]:hover{border-bottom:2px solid #0a33b9;transition:all .15s ease}.toc-list .toc-text[data-v-32f33ba4]:active{color:#0a33b9;transition:all .15s ease}.toc-list .toc3[data-v-32f33ba4]{font-size:.8em;margin-left:16px}.toc-list .toc3[data-v-32f33ba4]:before{content:"-";margin-right:4px}.dark-mode .post-mobile-toc[data-v-32f33ba4],.dark-mode .toc-mobile-button[data-v-32f33ba4]{background-color:rgba(0,0,0,.7);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}',""]),t.exports=n},384:function(t,o,e){"use strict";e.r(o);var n={props:{toc:{type:Array,required:!0}},data:function(){return{tocMenu:!1}},watch:{tocMenu:{handler:function(t){t?window.addEventListener("click",this.clickListener):window.removeEventListener("click",this.clickListener)}}},beforeDestroy:function(){window.removeEventListener("click",this.clickListener)},methods:{clickListener:function(t){t.target.classList.contains("click-block")||this.hideToc()},toggleTocMenu:function(){this.tocMenu=!this.tocMenu},hideToc:function(){this.tocMenu=!1}}},c=(e(379),e(2)),component=Object(c.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"toc-mobile-container"},[e("div",{staticClass:"toc-mobile-button click-block",on:{click:t.toggleTocMenu}},[t._v("목차")]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.tocMenu?e("div",{staticClass:"post-mobile-toc click-block"},[e("PostToc",{attrs:{toc:t.toc,mobile:""}})],1):t._e()])],1)}),[],!1,null,"32f33ba4",null);o.default=component.exports;installComponents(component,{PostToc:e(354).default})}}]);