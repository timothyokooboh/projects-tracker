(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0767":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"team"},[n("h1",{staticClass:"subheading grey--text"},[e._v("My team")]),n("v-container",{staticClass:"my-4"},[n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.team,(function(t,a){return n("v-flex",{key:a,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[n("v-card",{staticClass:"text-center ma-3",attrs:{flat:""}},[n("v-responsive",{staticClass:"pt-4"},[n("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"100"}},[n("img",{attrs:{src:t.avatar,alt:""}})])],1),n("v-card-text",[n("div",{staticClass:"subheading"},[e._v(e._s(t.name))]),n("div",{staticClass:"grey--text"},[e._v(e._s(t.role))])]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"grey"}},[n("v-icon",{attrs:{small:"",left:""}},[e._v("mdi-android-messages")]),n("span",[e._v("Message")])],1)],1)],1)],1)})),1)],1)],1)},s=[],i={data:function(){return{team:[{name:"Timothy",role:"Web developer",avatar:"/ninja.png"},{name:"Pete",role:"Graphic designer",avatar:"/rui.png"},{name:"Tamari",role:"Client service executive",avatar:"/mata.png"},{name:"Dolly",role:"Graphic artist",avatar:"/dolly.png"},{name:"Professor",role:"Project manager",avatar:"/sifu.png"}]}}},o=i,r=n("2877"),l=n("6544"),c=n.n(l),p=n("8212"),d=n("8336"),u=n("b0af"),h=n("99d9"),v=n("a523"),x=n("0e8f"),f=n("132d"),b=n("a722"),m=n("6b53"),g=Object(r["a"])(o,a,s,!1,null,null,null);t["default"]=g.exports;c()(g,{VAvatar:p["a"],VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VContainer:v["a"],VFlex:x["a"],VIcon:f["a"],VLayout:b["a"],VResponsive:m["a"]})},"210b":function(e,t,n){},acca:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"projects"},[n("h1",{staticClass:"subheading grey--text"},[e._v("This is the projects page")]),n("v-container",{staticClass:"my-4"},[n("v-expansion-panels",{attrs:{flat:""}},e._l(e.myProjects,(function(t,a){return n("v-expansion-panel",{key:a},[n("v-expansion-panel-header",[e._v(e._s(t.title))]),n("v-expansion-panel-content",[n("v-card",[n("v-card-text",{staticClass:"px-4 grey--text"},[n("div",{staticClass:"font-weight-bold"},[e._v("Due by "+e._s(t.due))]),n("div",[e._v(e._s(t.status))])])],1)],1)],1)})),1)],1)],1)},s=[],i=(n("4de4"),n("4160"),n("159b"),n("5530")),o=n("9138"),r={data:function(){return{projects:[]}},computed:{myProjects:function(){return this.projects.filter((function(e){return"timothy"===e.person}))}},created:function(){var e=this;o["a"].collection("projects").onSnapshot((function(t){var n=t.docChanges();n.forEach((function(t){"added"===t.type&&e.projects.push(Object(i["a"])(Object(i["a"])({},t.doc.data()),{},{id:t.doc.id}))}))}))}},l=r,c=n("2877"),p=n("6544"),d=n.n(p),u=n("b0af"),h=n("99d9"),v=n("a523"),x=n("4e82"),f=n("3206"),b=n("80d2"),m=n("58df"),g=Object(m["a"])(Object(x["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(f["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(i["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(b["l"])(this))}}),y=n("0789"),C=n("9d65"),j=n("a9ad"),_=Object(m["a"])(C["a"],j["a"],Object(f["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),P=_.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(y["a"],this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(b["l"])(t))])]})))}}),O=n("9d26"),w=n("5607"),A=Object(m["a"])(j["a"],Object(f["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),V=A.extend().extend({name:"v-expansion-panel-header",directives:{ripple:w["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(b["l"])(this,"actions")||[this.$createElement(O["a"],this.expandIcon)];return this.$createElement(y["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(i["a"])(Object(i["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[Object(b["l"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),B=(n("0481"),n("4069"),n("210b"),n("604c")),k=n("d9bd"),$=B["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},B["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(k["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(k["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),a=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(a)}}}),D=Object(c["a"])(l,a,s,!1,null,null,null);t["default"]=D.exports;d()(D,{VCard:u["a"],VCardText:h["b"],VContainer:v["a"],VExpansionPanel:g,VExpansionPanelContent:P,VExpansionPanelHeader:V,VExpansionPanels:$})}}]);
//# sourceMappingURL=about.159ccc78.js.map