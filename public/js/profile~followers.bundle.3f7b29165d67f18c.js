"use strict";(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([[8977],{80189:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});var o=r(5787),i=r(36470);const a={props:{id:{type:String},profileId:{type:String},username:{type:String},cachedProfile:{type:Object},cachedUser:{type:Object}},components:{drawer:o.default,"profile-followers":i.default},data:function(){return{isLoaded:!1,curUser:void 0,profile:void 0,relationship:void 0}},mounted:function(){this.init()},watch:{$route:"init"},methods:{init:function(){this.isLoaded=!1,this.relationship=void 0,this.owner=!1,this.cachedProfile&&this.cachedUser?(this.curUser=this.cachedUser,this.profile=this.cachedProfile,this.fetchRelationship()):(this.curUser=window._sharedData.user,this.fetchProfile())},fetchProfile:function(){var t=this,e=this.profileId?this.profileId:this.id;axios.get("/api/pixelfed/v1/accounts/"+e).then((function(e){t.profile=e.data,e.data.id==t.curUser.id?(t.owner=!0,t.fetchRelationship()):(t.owner=!1,t.fetchRelationship())})).catch((function(e){t.$router.push("/i/web/404")}))},fetchRelationship:function(){var t=this;if(this.owner)return this.relationship={},void(this.isLoaded=!0);axios.get("/api/v1/accounts/relationships",{params:{"id[]":this.profile.id}}).then((function(e){t.relationship=e.data[0],t.isLoaded=!0}))},goBack:function(){this.$router.push("/i/web/profile/"+this.profile.id)}}}},50371:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});const o={data:function(){return{user:window._sharedData.user}}}},6140:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});const o={props:{status:{type:Object},cursorLimit:{type:Number,default:200}},data:function(){return{preRender:void 0,fullContent:null,content:null,cursor:200}},mounted:function(){this.rewriteLinks()},methods:{readMore:function(){this.cursor=this.cursor+200,this.content=this.fullContent.substr(0,this.cursor)},rewriteLinks:function(){var t=this,e=this.status.content,r=document.createElement("div");r.innerHTML=e,r.querySelectorAll('a[class*="hashtag"]').forEach((function(t){var e=t.innerText;"#"==e.substr(0,1)&&(e=e.substr(1)),t.removeAttribute("target"),t.setAttribute("href","/i/web/hashtag/"+e)})),r.querySelectorAll('a:not(.hashtag)[class*="mention"], a:not(.hashtag)[class*="list-slug"]').forEach((function(e){var r=e.innerText;if("@"==r.substr(0,1)&&(r=r.substr(1)),0==t.status.account.local&&!r.includes("@")){var o=document.createElement("a");o.href=e.getAttribute("href"),r=r+"@"+o.hostname}e.removeAttribute("target"),e.setAttribute("href","/i/web/username/"+r)})),this.content=r.outerHTML,this.injectCustomEmoji()},injectCustomEmoji:function(){var t=this;this.status.emojis.forEach((function(e){var r='<img draggable="false" class="emojione custom-emoji" alt="'.concat(e.shortcode,'" title="').concat(e.shortcode,'" src="').concat(e.url,'" data-original="').concat(e.url,'" data-static="').concat(e.static_url,'" width="18" height="18" onerror="this.onerror=null;this.src=\'/storage/emoji/missing.png\';" />');t.content=t.content.replace(":".concat(e.shortcode,":"),r)}))}}}},19306:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var o=r(25100),i=r(29787),a=r(34719),n=r(95353),s=r(24848);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==l(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const p={props:{profile:{type:Object}},components:{ProfileHoverCard:a.default,Intersect:o.default,Placeholder:i.default},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,n.mapGetters)(["getCustomEmoji"])),data:function(){return{isLoaded:!1,feed:[],page:1,cursor:null,canLoadMore:!0,isFetchingMore:!1,isWarmingCache:!1,cacheWarmTimeout:void 0,cacheWarmInterations:0}},mounted:function(){this.fetchFollowers()},beforeDestroy:function(){clearTimeout(this.cacheWarmTimeout)},methods:{fetchFollowers:function(){var t=this;axios.get("/api/v1/accounts/"+this.profile.id+"/followers",{params:{cursor:this.cursor,_pe:1}}).then((function(e){var r;if(!e.data.length)return t.canLoadMore=!1,t.isLoaded=!0,void(null==t.cursor&&t.profile.followers_count&&(t.isWarmingCache=!0,t.setCacheWarmTimeout()));if(e.headers&&e.headers.link){var o=(0,s.parseLinkHeader)(e.headers.link);o.prev?(t.cursor=o.prev.cursor,t.canLoadMore=!0):t.canLoadMore=!1}else t.canLoadMore=!1;(r=t.feed).push.apply(r,c(e.data)),t.isLoaded=!0,t.isFetchingMore=!1,(t.isWarmingCache||t.cacheWarmTimeout)&&(t.isWarmingCache=!1,clearTimeout(t.cacheWarmTimeout),t.cacheWarmTimeout=void 0)})).catch((function(e){t.canLoadMore=!1,t.isLoaded=!0,t.isFetchingMore=!1}))},enterIntersect:function(){this.isFetchingMore||(this.isFetchingMore=!0,this.fetchFollowers())},getUsername:function(t){var e=this,r=t.display_name;if(!r||!r.trim().length)return t.username;if(r.includes(":")){return r.replaceAll(/(<a?)?:\w+:(\d{18}>)?/g,(function(t){var r=t.slice(1,t.length-1),o=e.getCustomEmoji.filter((function(t){return t.shortcode==r}));return o.length?'<img draggable="false" class="emojione custom-emoji" alt="'.concat(o[0].shortcode,'" title="').concat(o[0].shortcode,'" src="').concat(o[0].url,'" data-original="').concat(o[0].url,'" data-static="').concat(o[0].static_url,'" width="16" height="16" onerror="this.onerror=null;this.src=\'/storage/emoji/missing.png\';" />'):t}))}return r},goToProfile:function(t){this.$router.push({path:"/i/web/profile/".concat(t.id),params:{id:t.id,cachedProfile:t,cachedUser:this.profile}})},goBack:function(){this.$emit("back")},setCacheWarmTimeout:function(){var t=this;if(this.cacheWarmInterations>=5)return this.isWarmingCache=!1,void swal("Oops","Its taking longer than expected to collect this account followers. Please try again later","error");this.cacheWarmTimeout=setTimeout((function(){t.cacheWarmInterations++,t.fetchFollowers()}),45e3)}}}},3223:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});var o=r(50294),i=r(95353);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==a(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const l={props:{profile:{type:Object}},components:{ReadMore:o.default},data:function(){return{user:window._sharedData.user,bio:void 0,isLoading:!1,relationship:void 0}},mounted:function(){var t=this;this.rewriteLinks(),this.relationship=this.$store.getters.getRelationship(this.profile.id),this.relationship||this.profile.id==this.user.id||axios.get("/api/pixelfed/v1/accounts/relationships",{params:{"id[]":this.profile.id}}).then((function(e){t.relationship=e.data[0],t.$store.commit("updateRelationship",e.data)}))},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,i.mapGetters)(["getCustomEmoji"])),methods:{getDisplayName:function(){var t=this,e=this.profile,r=e.display_name;if(!r)return e.username;if(r.includes(":")){return r.replaceAll(/(<a?)?:\w+:(\d{18}>)?/g,(function(e){var r=e.slice(1,e.length-1),o=t.getCustomEmoji.filter((function(t){return t.shortcode==r}));return o.length?'<img draggable="false" class="emojione custom-emoji" alt="'.concat(o[0].shortcode,'" title="').concat(o[0].shortcode,'" src="').concat(o[0].url,'" data-original="').concat(o[0].url,'" data-static="').concat(o[0].static_url,'" width="16" height="16" onerror="this.onerror=null;this.src=\'/storage/emoji/missing.png\';" />'):e}))}return r},getUsername:function(){return this.profile.acct},formatCount:function(t){return App.util.format.count(t)},goToProfile:function(){this.$router.push({name:"profile",path:"/i/web/profile/".concat(this.profile.id),params:{id:this.profile.id,cachedProfile:this.profile,cachedUser:this.user}})},rewriteLinks:function(){var t=this,e=this.profile.note,r=document.createElement("div");r.innerHTML=e,r.querySelectorAll('a[class*="hashtag"]').forEach((function(t){var e=t.innerText;"#"==e.substr(0,1)&&(e=e.substr(1)),t.removeAttribute("target"),t.setAttribute("href","/i/web/hashtag/"+e)})),r.querySelectorAll('a:not(.hashtag)[class*="mention"], a:not(.hashtag)[class*="list-slug"]').forEach((function(e){var r=e.innerText;if("@"==r.substr(0,1)&&(r=r.substr(1)),0==t.profile.local&&!r.includes("@")){var o=document.createElement("a");o.href=t.profile.url,r=r+"@"+o.hostname}e.removeAttribute("target"),e.setAttribute("href","/i/web/username/"+r)})),this.bio=r.outerHTML},performFollow:function(){var t=this;this.isLoading=!0,this.$emit("follow"),setTimeout((function(){t.relationship.following=!0,t.isLoading=!1}),1e3)},performUnfollow:function(){var t=this;this.isLoading=!0,this.$emit("unfollow"),setTimeout((function(){t.relationship.following=!1,t.isLoading=!1}),1e3)}}}},57236:(t,e,r)=>{r.r(e),r.d(e,{render:()=>o,staticRenderFns:()=>i});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile-timeline-component"},[t.isLoaded?e("div",{staticClass:"container-fluid mt-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-8 offset-md-2 px-md-5"},[e("profile-followers",{attrs:{profile:t.profile,relationship:t.relationship},on:{back:function(e){return t.goBack()}}})],1)]),t._v(" "),e("drawer")],1):t._e()])},i=[]},69831:(t,e,r)=>{r.r(e),r.d(e,{render:()=>o,staticRenderFns:()=>i});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-drawer-component"},[e("div",{staticClass:"mobile-footer-spacer d-block d-sm-none mt-5"}),t._v(" "),e("div",{staticClass:"mobile-footer d-block d-sm-none fixed-bottom"},[e("div",{staticClass:"card card-body rounded-0 px-0 pt-2 pb-3 box-shadow",staticStyle:{"border-top":"1px solid var(--border-color)"}},[e("ul",{staticClass:"nav nav-pills nav-fill d-flex align-items-middle"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link text-dark",attrs:{to:"/i/web"}},[e("p",[e("i",{staticClass:"far fa-home fa-lg"})]),t._v(" "),e("p",{staticClass:"nav-link-label"},[e("span",[t._v("Home")])])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link text-dark",attrs:{to:"/i/web/timeline/local"}},[e("p",[e("i",{staticClass:"far fa-stream fa-lg"})]),t._v(" "),e("p",{staticClass:"nav-link-label"},[e("span",[t._v("Local")])])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link text-dark",attrs:{to:"/i/web/compose"}},[e("p",[e("i",{staticClass:"far fa-plus-circle fa-lg"})]),t._v(" "),e("p",{staticClass:"nav-link-label"},[e("span",[t._v("New")])])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link text-dark",attrs:{to:"/i/web/notifications"}},[e("p",[e("i",{staticClass:"far fa-bell fa-lg"})]),t._v(" "),e("p",{staticClass:"nav-link-label"},[e("span",[t._v("Alerts")])])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link text-dark",attrs:{to:"/i/web/profile/"+t.user.id}},[e("p",[e("i",{staticClass:"far fa-user fa-lg"})]),t._v(" "),e("p",{staticClass:"nav-link-label"},[e("span",[t._v("Profile")])])])],1)])])])])},i=[]},7971:(t,e,r)=>{r.r(e),r.d(e,{render:()=>o,staticRenderFns:()=>i});var o=function(){this._self._c;return this._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"list-group-item border-left-0 border-right-0 px-3"},[e("div",{staticClass:"ph-item border-0 p-0 m-0 align-items-center"},[e("div",{staticClass:"p-0 mb-0",staticStyle:{flex:"unset"}},[e("div",{staticClass:"ph-avatar",staticStyle:{"min-width":"40px !important",width:"40px !important",height:"40px"}})]),t._v(" "),e("div",{staticClass:"ph-col-9 mb-0"},[e("div",{staticClass:"ph-row"},[e("div",{staticClass:"ph-col-12"}),t._v(" "),e("div",{staticClass:"ph-col-12"})])])])])}]},16331:(t,e,r)=>{r.r(e),r.d(e,{render:()=>o,staticRenderFns:()=>i});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"read-more-component",staticStyle:{"word-break":"break-word"}},[e("div",{domProps:{innerHTML:t._s(t.content)}})])},i=[]},48281:(t,e,r)=>{r.r(e),r.d(e,{render:()=>o,staticRenderFns:()=>i});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile-followers-component"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-12 col-md-8"},[t.isLoaded?e("div",{staticClass:"d-flex justify-content-between align-items-center mb-4"},[e("div",[e("button",{staticClass:"btn btn-outline-dark rounded-pill font-weight-bold",on:{click:function(e){return t.goBack()}}},[t._v("\n                            Back\n                        ")])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-center flex-column w-100 overflow-hidden"},[e("p",{staticClass:"small text-muted mb-0 text-uppercase font-weight-light cursor-pointer text-truncate text-center",staticStyle:{width:"70%"},on:{click:function(e){return t.goBack()}}},[t._v("@"+t._s(t.profile.acct))]),t._v(" "),e("p",{staticClass:"lead font-weight-bold mt-n1 mb-0"},[t._v(t._s(t.$t("profile.followers")))])]),t._v(" "),t._m(0)]):t._e(),t._v(" "),t.isLoaded?e("div",{staticClass:"list-group scroll-card"},[t._l(t.feed,(function(r,o){return e("div",{staticClass:"list-group-item"},[e("a",{staticClass:"text-decoration-none",attrs:{id:"apop_"+r.id,href:r.url},on:{click:function(e){return e.preventDefault(),t.goToProfile(r)}}},[e("div",{staticClass:"media"},[e("img",{staticClass:"mr-3 shadow-sm",staticStyle:{"border-radius":"8px"},attrs:{src:r.avatar,width:"40",height:"40",draggable:"false",loading:"lazy",onerror:"this.src='/storage/avatars/default.jpg?v=0';this.onerror=null;"}}),t._v(" "),e("div",{staticClass:"media-body"},[e("p",{staticClass:"mb-0 text-truncate"},[e("span",{staticClass:"text-dark font-weight-bold text-decoration-none",domProps:{innerHTML:t._s(t.getUsername(r))}})]),t._v(" "),e("p",{staticClass:"mb-0 mt-n1 text-muted small text-break"},[t._v("@"+t._s(r.acct))])])])]),t._v(" "),e("b-popover",{attrs:{target:"apop_"+r.id,triggers:"hover",placement:"left",delay:"1000","custom-class":"shadow border-0 rounded-px"}},[e("profile-hover-card",{attrs:{profile:r}})],1)],1)})),t._v(" "),t.canLoadMore?e("div",[e("intersect",{on:{enter:t.enterIntersect}},[e("placeholder")],1)],1):t._e(),t._v(" "),t.canLoadMore||t.feed.length?t._e():e("div",[e("div",{staticClass:"list-group-item text-center"},[t.isWarmingCache?e("div",{staticClass:"px-4"},[e("p",{staticClass:"mb-0 lead font-weight-bold"},[t._v("Loading Followers...")]),t._v(" "),e("div",{staticClass:"py-3"},[e("b-spinner",{staticStyle:{width:"1.5rem",height:"1.5rem"},attrs:{variant:"primary"}})],1),t._v(" "),e("p",{staticClass:"small text-muted mb-0"},[t._v("Please wait while we collect followers of this account, this shouldn't take long!")])]):e("p",{staticClass:"mb-0 font-weight-bold"},[t._v("No followers yet!")])])])],2):e("div",{staticClass:"list-group"},[e("placeholder")],1)])])])},i=[function(){var t=this._self._c;return t("div",[t("a",{staticClass:"btn btn-dark rounded-pill font-weight-bold spacer-btn",attrs:{href:"#"}},[this._v("Back")])])}]},53577:(t,e,r)=>{r.r(e),r.d(e,{render:()=>o,staticRenderFns:()=>i});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile-hover-card"},[e("div",{staticClass:"profile-hover-card-inner"},[e("div",{staticClass:"d-flex justify-content-between align-items-start",staticStyle:{"max-width":"240px"}},[e("a",{attrs:{href:t.profile.url},on:{click:function(e){return e.preventDefault(),t.goToProfile()}}},[e("img",{staticClass:"avatar",attrs:{src:t.profile.avatar,width:"50",height:"50",onerror:"this.onerror=null;this.src='/storage/avatars/default.png?v=0';"}})]),t._v(" "),t.user.id==t.profile.id?e("div",[e("a",{staticClass:"btn btn-outline-primary px-3 py-1 font-weight-bold rounded-pill",attrs:{href:"/settings/home"}},[t._v("Edit Profile")])]):t._e(),t._v(" "),t.user.id!=t.profile.id&&t.relationship?e("div",[t.relationship.following?e("button",{staticClass:"btn btn-outline-primary px-3 py-1 font-weight-bold rounded-pill",attrs:{disabled:t.isLoading},on:{click:function(e){return t.performUnfollow()}}},[t.isLoading?e("span",[e("b-spinner",{attrs:{small:""}})],1):e("span",[t._v("Following")])]):e("div",[t.relationship.requested?e("button",{staticClass:"btn btn-primary primary px-3 py-1 font-weight-bold rounded-pill",attrs:{disabled:""}},[t._v("Follow Requested")]):e("button",{staticClass:"btn btn-primary primary px-3 py-1 font-weight-bold rounded-pill",attrs:{disabled:t.isLoading},on:{click:function(e){return t.performFollow()}}},[t.isLoading?e("span",[e("b-spinner",{attrs:{small:""}})],1):e("span",[t._v("Follow")])])])]):t._e()]),t._v(" "),e("p",{staticClass:"display-name"},[e("a",{attrs:{href:t.profile.url},domProps:{innerHTML:t._s(t.getDisplayName())},on:{click:function(e){return e.preventDefault(),t.goToProfile()}}})]),t._v(" "),e("div",{staticClass:"username"},[e("a",{staticClass:"username-link",attrs:{href:t.profile.url},on:{click:function(e){return e.preventDefault(),t.goToProfile()}}},[t._v("\n\t\t\t\t@"+t._s(t.getUsername())+"\n\t\t\t")]),t._v(" "),t.user.id!=t.profile.id&&t.relationship&&t.relationship.followed_by?e("p",{staticClass:"username-follows-you"},[e("span",[t._v("Follows You")])]):t._e()]),t._v(" "),t.profile.hasOwnProperty("pronouns")&&t.profile.pronouns&&t.profile.pronouns.length?e("p",{staticClass:"pronouns"},[t._v("\n\t\t\t"+t._s(t.profile.pronouns.join(", "))+"\n\t\t")]):t._e(),t._v(" "),e("p",{staticClass:"bio",domProps:{innerHTML:t._s(t.bio)}}),t._v(" "),e("p",{staticClass:"stats"},[e("span",{staticClass:"stats-following"},[e("span",{staticClass:"following-count"},[t._v(t._s(t.formatCount(t.profile.following_count)))]),t._v(" Following\n\t\t\t")]),t._v(" "),e("span",{staticClass:"stats-followers"},[e("span",{staticClass:"followers-count"},[t._v(t._s(t.formatCount(t.profile.followers_count)))]),t._v(" Followers\n\t\t\t")])])])])},i=[]},35518:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});var o=r(76798),i=r.n(o)()((function(t){return t[1]}));i.push([t.id,".app-drawer-component .nav-link{padding:.5rem .1rem}.app-drawer-component .nav-link.active{background-color:transparent}.app-drawer-component .nav-link.router-link-exact-active{background-color:transparent;color:var(--primary)!important}.app-drawer-component .nav-link p{margin-bottom:0}.app-drawer-component .nav-link-label{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:10px;font-weight:700;margin-top:0;opacity:.6;text-transform:uppercase}",""]);const a=i},46058:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});var o=r(76798),i=r.n(o)()((function(t){return t[1]}));i.push([t.id,".profile-followers-component .list-group-item{border:none}.profile-followers-component .list-group-item:not(:last-child){border-bottom:1px solid rgba(0,0,0,.125)}.profile-followers-component .scroll-card{-ms-overflow-style:none;max-height:calc(100vh - 250px);overflow-y:auto;scroll-behavior:smooth;scrollbar-width:none}.profile-followers-component .scroll-card::-webkit-scrollbar{display:none}.profile-followers-component .spacer-btn{opacity:0;pointer-events:none}",""]);const a=i},93100:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});var o=r(76798),i=r.n(o)()((function(t){return t[1]}));i.push([t.id,".profile-hover-card{border:none;display:block;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;overflow:hidden;padding:.5rem;width:300px}.profile-hover-card .avatar{border-radius:15px;box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important;margin-bottom:.5rem}.profile-hover-card .display-name{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;font-weight:800!important;line-height:.8;margin-bottom:2px;margin-top:5px;max-width:240px;-webkit-user-select:all;-moz-user-select:all;user-select:all;word-break:break-word}.profile-hover-card .display-name a{color:var(--body-color);text-decoration:none}.profile-hover-card .username{font-size:12px;font-weight:700;margin-bottom:.6rem;margin-top:0;max-width:240px;overflow:hidden;-webkit-user-select:all;-moz-user-select:all;user-select:all;word-break:break-word}.profile-hover-card .username-link{color:var(--text-lighter);margin-right:4px;text-decoration:none}.profile-hover-card .username-follows-you{margin:4px 0}.profile-hover-card .username-follows-you span{background-color:var(--comment-bg);border-radius:6px;color:var(--dropdown-item-color);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;line-height:16px;padding:2px 4px}.profile-hover-card .pronouns{color:#9ca3af;font-size:11px;font-weight:600;margin-bottom:.6rem;margin-top:-.8rem}.profile-hover-card .bio{color:var(--body-color);font-size:12px;line-height:1.2;margin-bottom:0;max-height:60px;max-width:240px;overflow:hidden;text-overflow:ellipsis;word-break:break-word}.profile-hover-card .bio .invisible{display:none}.profile-hover-card .stats{color:var(--body-color);font-size:14px;margin-bottom:0;margin-top:.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.profile-hover-card .stats .stats-following{margin-right:.8rem}.profile-hover-card .stats .followers-count,.profile-hover-card .stats .following-count{font-weight:800}.profile-hover-card .btn.rounded-pill{min-width:80px}",""]);const a=i},96259:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});var o=r(85072),i=r.n(o),a=r(35518),n={insert:"head",singleton:!1};i()(a.default,n);const s=a.default.locals||{}},51423:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});var o=r(85072),i=r.n(o),a=r(46058),n={insert:"head",singleton:!1};i()(a.default,n);const s=a.default.locals||{}},67621:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});var o=r(85072),i=r.n(o),a=r(93100),n={insert:"head",singleton:!1};i()(a.default,n);const s=a.default.locals||{}},8755:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});var o=r(72375),i=r(48444),a={};for(const t in i)"default"!==t&&(a[t]=()=>i[t]);r.d(e,a);const n=(0,r(14486).default)(i.default,o.render,o.staticRenderFns,!1,null,null,null).exports},5787:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});var o=r(16286),i=r(80260),a={};for(const t in i)"default"!==t&&(a[t]=()=>i[t]);r.d(e,a);r(68840);const n=(0,r(14486).default)(i.default,o.render,o.staticRenderFns,!1,null,null,null).exports},29787:(t,e,r)=>{r.r(e),r.d(e,{default:()=>i});var o=r(68329);const i=(0,r(14486).default)({},o.render,o.staticRenderFns,!1,null,null,null).exports},50294:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});var o=r(95728),i=r(33417),a={};for(const t in i)"default"!==t&&(a[t]=()=>i[t]);r.d(e,a);const n=(0,r(14486).default)(i.default,o.render,o.staticRenderFns,!1,null,null,null).exports},36470:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});var o=r(7432),i=r(83593),a={};for(const t in i)"default"!==t&&(a[t]=()=>i[t]);r.d(e,a);r(94608);const n=(0,r(14486).default)(i.default,o.render,o.staticRenderFns,!1,null,null,null).exports},34719:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});var o=r(38888),i=r(42260),a={};for(const t in i)"default"!==t&&(a[t]=()=>i[t]);r.d(e,a);r(88814);const n=(0,r(14486).default)(i.default,o.render,o.staticRenderFns,!1,null,null,null).exports},48444:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});var o=r(80189),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i);const a=o.default},80260:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});var o=r(50371),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i);const a=o.default},33417:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});var o=r(6140),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i);const a=o.default},83593:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});var o=r(19306),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i);const a=o.default},42260:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});var o=r(3223),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i);const a=o.default},72375:(t,e,r)=>{r.r(e);var o=r(57236),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i)},16286:(t,e,r)=>{r.r(e);var o=r(69831),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i)},68329:(t,e,r)=>{r.r(e);var o=r(7971),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i)},95728:(t,e,r)=>{r.r(e);var o=r(16331),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i)},7432:(t,e,r)=>{r.r(e);var o=r(48281),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i)},38888:(t,e,r)=>{r.r(e);var o=r(53577),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i)},68840:(t,e,r)=>{r.r(e);var o=r(96259),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i)},94608:(t,e,r)=>{r.r(e);var o=r(51423),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i)},88814:(t,e,r)=>{r.r(e);var o=r(67621),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);r.d(e,i)}}]);