(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{419:function(t,e,n){var content=n(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("532941e3",content,!0,{sourceMap:!1})},451:function(t,e,n){"use strict";n(419)},452:function(t,e,n){var o=n(15)(!1);o.push([t.i,".comment-container{display:flex;justify-content:center}.comment-center{width:100%;padding:0 48px}.utterances{max-width:100%;z-index:0}@media(max-width:575px){.comment-center{width:100%}}",""]),o.locals={breakpointXl:"1200px",breakpointLg:"992px",breakpointMd:"768px",breakpointSm:"576px"},t.exports=o},465:function(t,e,n){"use strict";n.r(e);n(74);var o={computed:{colorMode:function(){return this.$store.state.isDarkMode?"dark":"light"}},watch:{colorMode:function(t){var e={type:"set-theme",theme:"github-".concat(t)},n=document.querySelector("iframe.utterances-frame");if(n)n.contentWindow.postMessage(e,"https://utteranc.es");else var o=setInterval((function(){(n=document.querySelector("iframe.utterances-frame"))&&(clearInterval(o),n.contentWindow.postMessage(e,"https://utteranc.es"))}),500)}},mounted:function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.crossOrigin="anonymous",t.src="https://utteranc.es/client.js",t.setAttribute("issue-term","title"),t.setAttribute("repo","sckroll/sckroll.github.io"),t.setAttribute("theme","github-".concat(this.colorMode)),this.$refs.comment.appendChild(t)}},c=(n(451),n(2)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"comment-container"},[e("div",{ref:"comment",staticClass:"comment-center"})])}),[],!1,null,null,null);e.default=component.exports}}]);