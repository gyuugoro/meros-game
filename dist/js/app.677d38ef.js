(function(e){function t(t){for(var r,i,c=t[0],o=t[1],l=t[2],h=0,f=[];h<c.length;h++)i=c[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("transition",{attrs:{mode:"out-in",name:"route"}},[a("router-view")],1)],1)},s=[],i={},c=i,o=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),h=a("7496"),f=Object(o["a"])(c,n,s,!1,null,null,null),p=f.exports;u()(f,{VApp:h["a"]});var d=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"my-auto mx-auto"},[a("v-form",{ref:"input",on:{submit:function(e){e.preventDefault()}}},[a("v-text-field",{attrs:{label:"あなたの渾名（例：しょーちゃん）",color:"orange",outlined:"",rules:[e.rule],"append-icon":"mdi-account-search",autofocus:""},on:{"click:append":function(t){return e.find()},keypress:[function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.find()}]},model:{value:e.changeKey,callback:function(t){e.changeKey=t},expression:"changeKey"}})],1)],1)},v=[],g={created:function(){this.$store.commit("start")},data:function(){return{rule:function(e){return!!e||"ちゃんと入力してくだされ"},isEnter:!1}},computed:{changeKey:{get:function(){return this.$store.state.key},set:function(e){this.$store.commit("changeKey",e)}}},methods:{find:function(){this.$refs.input.validate()&&(console.log("find!"),this.$router.push({name:"Answer"}))}}},y=g,_=a("a523"),b=a("4bd4"),w=a("8654"),$=Object(o["a"])(y,m,v,!1,null,null,null),k=$.exports;u()($,{VContainer:_["a"],VForm:b["a"],VTextField:w["a"]});var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticStyle:{padding:"0px"},attrs:{fluid:"","fill-height":""}},[a("v-container",{class:e.image,attrs:{fluid:"","fill-height":""}}),a("transition",{attrs:{name:"text"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"text"},[e._v(" "+e._s(e.$store.state.key)+"は"+e._s(e.$store.state.character)+" "),a("br"),e._v(" レア度は"+e._s(e.$store.state.level)+" ")])]),a("div",{staticStyle:{width:"100vw",height:"100vh","text-align":"center"}},[a("h1",[e._v("情報")]),e._l(this.$store.state.datas,(function(t,r){return a("p",{key:r,staticClass:"list-text"},[e._v(" "+e._s(t.name)+"・・・"+e._s(t.character)+" "),a("br")])}))],2)],1)},O=[],S={created:function(){this.$store.dispatch("character"),this.$store.dispatch("setDatas"),"メロス"==this.$store.state.character?this.image="meros":"セリヌンティウス"==this.$store.state.character?this.image="serinuntius":"ディオニス"==this.$store.state.character?this.image="dionis":"メロスの妹"==this.$store.state.character?this.image="meros_sister":"フィロストラトス"==this.$store.state.character?this.image="philostratus":"山賊"==this.$store.state.character?this.image="bandits":"メロスの妹の結婚相手"==this.$store.state.character?this.image="meros_sister_marriage_partner":"メロスに揺さぶられた老爺"==this.$store.state.character?this.image="meros_swayed_oldman":"メロスに緋のマントを捧げた少女"==this.$store.state.character?this.image="meros_red_cloak_dedicated_girl":"ゼウス"==this.$store.state.character?this.image="zeus":"メロスに蹴とばされた犬"==this.$store.state.character?this.image="meros_kickoff_doc":"メロスの羊"==this.$store.state.character?this.image="meros_sheep":"太宰治"==this.$store.state.character?this.image="osamu_dazai":"永遠の裏切者、地上で最も不名誉の人種"==this.$store.state.character?this.image="forever_traitor":"王に殺された賢臣のアレキス"==this.$store.state.character&&(this.image="sage_arekis"),window.addEventListener("scroll",this.scroll)},data:function(){return{image:"sheep",isShow:!0,scrollY:0}},methods:{scroll:function(){this.scrollY=window.scrollY,this.scrollY<=100?this.isShow=!0:this.isShow=!1}}},j=S,D=(a("7143"),Object(o["a"])(j,x,O,!1,null,"4f7300e0",null)),E=D.exports;u()(D,{VContainer:_["a"]});a("4160"),a("b0c0"),a("159b");var K=a("2f62"),z=a("2591");r["a"].use(K["a"]);var C=new K["a"].Store({state:{key:"",character:"",level:"",datas:[]},mutations:{changeKey:function(e,t){e.key=t},start:function(e){e.key=""},addDatas:function(e,t){e.datas.unshift(t)},deleteDatas:function(e){e.datas=[]}},actions:{character:function(e){var t=e.state,a=Math.floor(110*Math.random())+1;a>=1&&a<31?(t.character="メロス",t.level="低"):a>=31&&a<61?(t.character="セリヌンティウス",t.level="低"):a>=61&&a<91?(t.character="ディオニス",t.level="低"):a>=91&&a<96?(t.character="メロスの妹",t.level="中"):a>=96&&a<101?(t.character="フィロストラトス",t.level="中"):101==a?(t.character="山賊",t.level="高"):102==a?(t.character="メロスの妹の結婚相手",t.level="高"):103==a?(t.character="メロスに揺さぶられた老爺",t.level="高"):104==a?(t.character="メロスに緋のマントを捧げた少女",t.level="高"):105==a?(t.character="ゼウス",t.level="高"):106==a?(t.character="メロスに蹴とばされた犬",t.level="高"):107==a?(t.character="メロスの羊",t.level="高"):108==a?(t.character="太宰治",t.level="高"):109==a?(t.character="永遠の裏切者、地上で最も不名誉の人種",t.level="高"):110==a&&(t.character="王に殺された賢臣のアレキス",t.level="高")},getDatas:function(e){var t=e.commit;t("deleteDatas"),z["a"].firestore().collection("meros-game").get("time").then((function(e){e.forEach((function(e){t("addDatas",{name:e.data().name,character:e.data().character})}))}))},setDatas:function(e){var t=e.state,a=e.dispatch;z["a"].firestore().collection("meros-game").doc(t.key).set({character:t.character,time:(new Date).getTime(),name:t.key}).then((function(){a("getDatas")}))}}});r["a"].use(d["a"]);var M=new d["a"]({routes:[{path:"/",name:"Home",component:k},{path:"/answer",name:"Answer",component:E,beforeEnter:function(e,t,a){""==C.state.key?a("/"):a()}},{path:"/*",redirect:"/"}]}),P=a("f309");r["a"].use(P["a"]);var T=new P["a"]({}),I={apiKey:"AIzaSyBdvU9aJKzIxTTdizfOdHk46QjwSR0DzGg",authDomain:"palami-apps.firebaseapp.com",databaseURL:"https://palami-apps.firebaseio.com",projectId:"palami-apps",storageBucket:"palami-apps.appspot.com",messagingSenderId:"1000349405707",appId:"1:1000349405707:web:30b2663bba0702a693ed0e",measurementId:"G-SXYQZW4EMY"};z["a"].initializeApp(I),z["a"].analytics(),r["a"].config.productionTip=!1,new r["a"]({router:M,store:C,vuetify:T,render:function(e){return e(p)}}).$mount("#app")},7143:function(e,t,a){"use strict";a("9225")},"85ec":function(e,t,a){},9225:function(e,t,a){}});
//# sourceMappingURL=app.677d38ef.js.map