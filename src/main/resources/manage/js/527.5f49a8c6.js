"use strict";(self["webpackChunkvue3_nb0"]=self["webpackChunkvue3_nb0"]||[]).push([[527],{88527:(e,l,n)=>{n.r(l),n.d(l,{default:()=>k});n(63134),n(10307),n(39524);var o=n(67377),a=n(91370),u=n(51290),t=function(e){return(0,o.dD)("data-v-532c93b2"),e=e(),(0,o.Cn)(),e},i={class:"login_view"},s=t((function(){return(0,o._)("div",{class:"title_view"},"基于微信小程序的食堂点餐系统登录",-1)})),r={key:0,class:"list_item"},v=t((function(){return(0,o._)("div",{class:"list_label"}," 账号： ",-1)})),c={key:1,class:"list_item"},d=t((function(){return(0,o._)("div",{class:"list_label"}," 密码： ",-1)})),p=["onKeydown"],f={key:2,class:"list_type"},m=t((function(){return(0,o._)("div",{class:"list_label"}," 用户类型： ",-1)})),g={class:"btn_view"};const w={__name:"login",setup:function(e){var l,n=(0,u.iH)([]),t=(0,u.iH)([]),w=(0,u.iH)({role:"",username:"",password:""}),_=(0,u.iH)(""),h=(0,u.iH)(1),k=null===(l=(0,o.FN)())||void 0===l?void 0:l.appContext.config.globalProperties,b=function(e){null===k||void 0===k||k.$router.push("/".concat(e,"Register"))},y=function(){if(w.value.username)if(w.value.password){if(n.value.length>1){if(!w.value.role)return null===k||void 0===k||k.$toolUtil.message("请选择角色","error"),void verifySlider.value.reset();for(var e=0;e<t.value.length;e++)t.value[e].roleName==w.value.role&&(_.value=t.value[e].tableName)}else _.value=n.value[0].tableName,w.value.role=n.value[0].roleName;U()}else null===k||void 0===k||k.$toolUtil.message("请输入密码","error");else null===k||void 0===k||k.$toolUtil.message("请输入用户名","error")},U=function(){null===k||void 0===k||k.$http({url:"".concat(_.value,"/login?username=").concat(w.value.username,"&password=").concat(w.value.password),method:"post"}).then((function(e){null===k||void 0===k||k.$toolUtil.storageSet("Token",e.data.token),null===k||void 0===k||k.$toolUtil.storageSet("role",w.value.role),null===k||void 0===k||k.$toolUtil.storageSet("sessionTable",_.value),null===k||void 0===k||k.$toolUtil.storageSet("adminName",w.value.username),null===k||void 0===k||k.$router.push("/")}),(function(e){}))},$=function(){var e={page:1,limit:1,sort:"id"};null===k||void 0===k||k.$http({url:"menu/list",method:"get",params:e}).then((function(e){t.value=JSON.parse(e.data.data.list[0].menujson);for(var l=0;l<t.value.length;l++)"是"==t.value[l].hasBackLogin&&n.value.push(t.value[l]);w.value.role=n.value[0].roleName,null===k||void 0===k||k.$toolUtil.storageSet("menus",JSON.stringify(t.value))}))},N=function(){$()};return(0,o.bv)((function(){N()})),function(e,l){var u=(0,o.up)("el-option"),t=(0,o.up)("el-select"),_=(0,o.up)("el-button"),k=(0,o.up)("el-form"),U=(0,o.up)("Vcode");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",i,[(0,o.Wm)(k,{model:w.value,class:"login_form"},{default:(0,o.w5)((function(){return[s,1==h.value?((0,o.wg)(),(0,o.iD)("div",r,[v,(0,o.wy)((0,o._)("input",{class:"list_inp","onUpdate:modelValue":l[0]||(l[0]=function(e){return w.value.username=e}),placeholder:"请输入账号"},null,512),[[a.nr,w.value.username]])])):(0,o.kq)("",!0),1==h.value?((0,o.wg)(),(0,o.iD)("div",c,[d,(0,o.wy)((0,o._)("input",{class:"list_inp","onUpdate:modelValue":l[1]||(l[1]=function(e){return w.value.password=e}),type:"password",placeholder:"请输入密码",onKeydown:(0,a.D2)(y,["enter","native"])},null,40,p),[[a.nr,w.value.password]])])):(0,o.kq)("",!0),n.value.length>1?((0,o.wg)(),(0,o.iD)("div",f,[m,(0,o.Wm)(t,{modelValue:w.value.role,"onUpdate:modelValue":l[2]||(l[2]=function(e){return w.value.role=e}),placeholder:"请选择用户类型"},{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.value,(function(e,l){return(0,o.wg)(),(0,o.j4)(u,{label:e.roleName,value:e.roleName},null,8,["label","value"])})),256))]})),_:1},8,["modelValue"])])):(0,o.kq)("",!0),(0,o._)("div",g,[1==h.value?((0,o.wg)(),(0,o.j4)(_,{key:0,class:"login",type:"success",onClick:y},{default:(0,o.w5)((function(){return[(0,o.Uk)("登录")]})),_:1})):(0,o.kq)("",!0),(0,o.Wm)(_,{class:"register",type:"primary",onClick:l[3]||(l[3]=function(e){return b("shangjia")})},{default:(0,o.w5)((function(){return[(0,o.Uk)("注册商家")]})),_:1})])]})),_:1},8,["model"])]),(0,o.Wm)(U,{show:e.isShow,onSuccess:e.success,onClose:e.close,onFail:e.fail},null,8,["show","onSuccess","onClose","onFail"])])}}};var _=n(57326);const h=(0,_.Z)(w,[["__scopeId","data-v-532c93b2"]]),k=h}}]);
//# sourceMappingURL=527.5f49a8c6.js.map