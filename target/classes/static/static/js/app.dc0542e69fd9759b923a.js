webpackJsonp([16],{NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("//Fk"),r=t.n(o),a=t("7+uW"),l={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=t("VU/8")({name:"App"},l,!1,function(e){t("czYa")},null,null).exports,u=t("/ocq"),c=function(e){return t.e(3).then(function(){var n=[t("xJsL")];e.apply(null,n)}.bind(this)).catch(t.oe)};a.default.use(u.a);var s=new u.a({history:!1,saveScrollPosition:!0,suppressTransitionError:!0,routes:[{path:"/login",name:"login",component:c},{path:"/",name:"login",component:c},{path:"/",component:function(e){return Promise.all([t.e(0),t.e(2)]).then(function(){var n=[t("s6+2")];e.apply(null,n)}.bind(this)).catch(t.oe)},beforeEnter:function(e,n,t){var o=JSON.parse(window.localStorage.getItem("user")),r=JSON.parse(window.localStorage.getItem("user")).role;null!=o&&"管理员"===r?t():"管理员"!==r?(bus.$notify.error({title:"错误",message:"权限不足！"}),t("/login")):(bus.$notify.error({title:"错误",message:"请先登录！"}),t("/login"))},children:[{path:"/my",name:"my",component:function(e){return Promise.all([t.e(0),t.e(6)]).then(function(){var n=[t("NI5s")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/handbook",name:"handbook",component:function(e){return t.e(5).then(function(){var n=[t("HE8R")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/user",name:"user",component:function(e){return Promise.all([t.e(0),t.e(13)]).then(function(){var n=[t("jyJz")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/userlog",name:"userlog",component:function(e){return Promise.all([t.e(0),t.e(10)]).then(function(){var n=[t("2PZg")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/borrowlog",name:"borrowlog",component:function(e){return Promise.all([t.e(0),t.e(11)]).then(function(){var n=[t("gmyT")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/backlog",name:"backlog",component:function(e){return Promise.all([t.e(0),t.e(8)]).then(function(){var n=[t("8axO")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/more",name:"more",component:function(e){return t.e(14).then(function(){var n=[t("WxdE")];e.apply(null,n)}.bind(this)).catch(t.oe)}}]},{path:"/",component:function(e){return Promise.all([t.e(0),t.e(1)]).then(function(){var n=[t("72dh")];e.apply(null,n)}.bind(this)).catch(t.oe)},beforeEnter:function(e,n,t){null!=JSON.parse(window.localStorage.getItem("user"))?t():(bus.$notify.error({title:"错误",message:"请先登录！"}),t("/login"))},children:[{path:"/home",name:"home",component:function(e){return Promise.all([t.e(0),t.e(4)]).then(function(){var n=[t("cKhr")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/library",name:"library",component:function(e){return Promise.all([t.e(0),t.e(7)]).then(function(){var n=[t("8taU")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/Myback",name:"Myback",component:function(e){return Promise.all([t.e(0),t.e(9)]).then(function(){var n=[t("JC6T")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/Myborrow",name:"Myborrow",component:function(e){return Promise.all([t.e(0),t.e(12)]).then(function(){var n=[t("Vlr3")];e.apply(null,n)}.bind(this)).catch(t.oe)}}]}]}),p=t("zL8q"),h=t.n(p),m=(t("tvR6"),t("mtWM")),f=t.n(m);t.d(n,"postRequest",function(){return d}),t.d(n,"getRequest",function(){return b}),a.default.use(h.a),a.default.config.productionTip=!1,window.bus=new a.default,window.bus2=new a.default,window.bus=new a.default({el:"#app",router:s,template:"<App/>",components:{App:i}});var d=function(e,n){return f()({method:"post",url:e,data:n,dataType:"json",transformRequest:[function(e){var n="";for(var t in e)n+=encodeURIComponent(t)+"="+encodeURIComponent(e[t])+"&";return n}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})};f.a.interceptors.request.use(function(e){return e.headers.token=window.localStorage.getItem("token"),e},function(e){return console.log("加载超时"),r.a.reject(e)}),f.a.interceptors.response.use(function(e){if(-1===e.data.status)window.localStorage.removeItem("user"),window.bus.$router.replace({name:"login"});else{if(-2!==e.data.status)return null!=e.headers.refresh&&window.localStorage.setItem("token",e.headers.refresh),e;window.bus.$router.replace({name:"login"})}},function(e){return console.log("加载失败"),r.a.reject(e)});var b=function(e,n){return f()({method:"get",params:n,url:e})};new a.default({el:"#app",router:s,components:{App:i},template:"<App/>"});n.default=f.a;window.axios=t("mtWM")},czYa:function(e,n){},tvR6:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.dc0542e69fd9759b923a.js.map