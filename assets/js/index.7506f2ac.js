(function(t){function a(a){for(var s,i,r=a[0],o=a[1],l=a[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(a);while(f.length)f.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,r=1;r<e.length;r++){var o=e[r];0!==c[o]&&(s=!1)}s&&(n.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},c={index:0},n=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/Demo_product/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var u=o;n.push([1,"chunk-vendors"]),e()})({0:function(t,a){},"0470":function(t,a,e){},"0544":function(t,a,e){},1:function(t,a,e){t.exports=e("44eb")},"1b21":function(t,a,e){"use strict";var s=e("0544"),c=e.n(s);c.a},"44eb":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Navbar",{attrs:{id:"nav"}}),e("Production",{attrs:{id:"Production"}}),e("Footer")],1)},n=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"nav"},[t._m(0),e("div",{staticClass:"navBranch",class:{navOps:t.isOpen}},[t._m(1)]),e("div",{staticClass:"burger",on:{click:t.showUp}},[e("div",{staticClass:"burgerLine"}),e("div",{staticClass:"burgerLine"}),e("div",{staticClass:"burgerLine"})])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:e("9b47"),alt:"logo"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",{staticClass:"nav-Item"},[e("a",{attrs:{href:"index.html"}},[t._v("耳環 Earrings")])]),e("li",{staticClass:"nav-Item"},[t._v("購物車 Cart")]),e("li",{staticClass:"nav-Item"},[t._v("會員 mender")])])}],o={data:function(){return{isOpen:!1,scrollTop:""}},methods:{showUp:function(){this.isOpen=!this.isOpen}}},l=o,u=(e("ce9f"),e("2877")),d=Object(u["a"])(l,i,r,!1,null,"4d401352",null),f=d.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("productItem",{staticClass:"slider"})],1)},b=[],p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"categoryslider",staticStyle:{flex:"20%"}},[e("ul",{attrs:{id:"categoryLIst"}},[e("li",[e("a",{on:{click:function(a){return t.CatchProductItem("All")}}},[t._v("熱銷")])]),e("li",[e("a",{on:{click:function(a){return t.filterNew()}}},[t._v("新品")])]),e("li",[e("a",{on:{click:function(a){return t.CatchProductItem("earing")}}},[t._v("耳環")])]),e("li",[e("a",{on:{click:function(a){return t.CatchProductItem("necklace")}}},[t._v("項鍊")])]),e("div",{staticClass:"cartSlider"},[e("a",[t._v("待會再看")]),e("br"),t.CartInNothing?e("a",[t._v("還沒有看到喜歡的！")]):t._e(),t._l(t.cartData,(function(a,s){return e("div",{key:a[1]+s},[e("a",{staticStyle:{"font-size":"1.2vw"},on:{click:function(e){t.backData(a[0])}}},[t._v(t._s(a[2]))])])}))],2)])]),e("div",{staticStyle:{"background-color":"var(--product-bg-color)",flex:"80%"}},[e("div",{staticClass:"filterButton"},[e("div",{staticStyle:{margin:"1vw 3vw"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"searcher",staticStyle:{margin:"0vw"},attrs:{placeholder:"要找..."},domProps:{value:t.searchValue},on:{input:function(a){a.target.composing||(t.searchValue=a.target.value)}}}),e("button",{staticStyle:{margin:"0vw"},on:{click:function(a){t.search()}}},[t._v("search")])]),e("div",[e("button",{on:{click:function(a){return t.sortPrice()}}},[t._v("價錢高低")]),e("button",[t._v("購買次數")]),e("button",{on:{click:function(a){return t.sortDate()}}},[t._v("上架時間")])])]),e("div",{staticClass:"Product",attrs:{id:"Product"}},t._l(t.Products,(function(a,s){return e("div",{key:a[1]+s,staticClass:"ProductItem"},[e("div",{staticClass:"ProductItemInfo"},[e("div",{staticClass:"ProductImg",on:{click:function(e){t.backData(a[0])}}},[e("img",{attrs:{src:a[7]}})]),e("a",{staticStyle:{"font-size":"1.2vw"},on:{click:function(e){t.backData(a[0])}}},[t._v(t._s(a[2]))]),e("br"),e("div",{staticStyle:{"padding-top":"1vw",display:"flex","justify-content":"space-between"}},[e("a",{staticStyle:{"font-size":"1.4vw"}},[t._v("NT: "+t._s(a[3]))]),e("a",{staticStyle:{float:"right",margin:"3px 5px"}},[e("i",{staticClass:"far fa-heart",class:{fas:a[5]},on:{click:function(e){return t.addCart(a[0])}}})])])]),e("a",{staticStyle:{"font-size":"0.5vw"}},[t._v("上架："+t._s(a[9]))])])})),0),e("div",{staticClass:"productPage"},[e("div",{staticClass:"pagination"},[e("div",{on:{click:function(a){return t.pagination(t.catchData,t.currentPage-1)}}},[e("a",[t._v("上一頁")])]),e("div",{staticClass:"pagination",attrs:{id:"productPage"}},t._l(t.pageTotals,(function(a){return e("div",{key:a[t.i],on:{click:function(e){return t.pagination(t.catchData,a)}}},[e("a",[t._v(t._s(a))])])})),0),e("div",{on:{click:function(a){return t.pagination(t.catchData,t.currentPage+1)}}},[e("a",[t._v("下一頁")])])])])])])},j=[],g=(e("4de4"),e("c975"),e("d81d"),e("45fc"),e("b64b"),e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("1157")),m=e.n(g),v=e("c1df"),y={data:function(){return{Products:[],pageTotals:[],paginationTotal:"",currentPage:"",datapage:12,catchData:[],sortRe:!0,searchValue:"",cartData:[],CartInNothing:!0}},watch:{cartData:function(){void 0===this.cartData[0]&&(this.CartInNothing=!this.CartInNothing)}},methods:{pagination:function(t,a){a>this.paginationTotal?(document.getElementById("Product").innerHTML="",a=this.paginationTotal):document.getElementById("Product").innerHTML="",a<=0&&(a=1);var e=a*this.datapage-this.datapage+1,s=a*this.datapage;for(this.i=0;this.i<=t.length;this.i++)this.i>=e&&this.i<=s&&this.Products.push(t[this.i-1]);this.currentPage<this.paginationTotal&&this.currentPage>0&&(document.body.scrollTop=0),this.currentPage=a},pageSelect:function(){var t=this.catchData.length;for(document.getElementById("productPage").innerHTML="",this.paginationTotal=Math.ceil(t/this.datapage),this.i=1;this.i<=this.paginationTotal;this.i++)this.pageTotals.push(this.i)},CatchProductItem:function(t){this.catchData="All"===t?this.ProdcutData.filter((function(t){return""!==t[0]})):this.ProdcutData.filter((function(a){return a[1]===t}));for(var a=0;a<this.catchData.length;a++)this.catchData[a][9]=v(this.catchData[a][9]).format("MM/DD/YYYY");document.getElementById("Product").innerHTML="",this.pagination(this.catchData,1),this.pageSelect()},sort0:function(){this.catchData.sort((function(t,a){return t[0]-a[0]}))},sortPrice:function(){!0===this.sortRe?(this.catchData.sort((function(t,a){return t[3]-a[3]})),this.sortRe=!this.sortRe):(this.catchData.sort((function(t,a){return t[3]-a[3]})),this.catchData.reverse(),this.sortRe=!this.sortRe),document.getElementById("Product").innerHTML="",this.pagination(this.catchData,1),this.pageSelect(),this.sort0()},sortDate:function(){!0===this.sortRe?(this.catchData.sort((function(t,a){return t[9]<a[9]?1:-1})),this.sortRe=!this.sortRe):(this.catchData.sort((function(t,a){return t[9]<a[9]?1:-1})),this.catchData.reverse(),this.sortRe=!this.sortRe),document.getElementById("Product").innerHTML="",this.pagination(this.catchData,1),this.pageSelect(),this.sort0()},filterNew:function(){for(var t=0;t<this.catchData.length;t++){var a=new Date(this.catchData[t][9].replace(/-/g,"/")),e=new Date,s=e.getTime()-a.getTime(),c=parseInt(s/864e5);this.catchData[t].push(c)}this.catchData=this.catchData.filter((function(t){return t[11]<30})),document.getElementById("Product").innerHTML="",this.pagination(this.catchData,1),this.pageSelect()},search:function(){var t=this;this.catchData=this.ProdcutData;var a=this.catchData.map((function(a){if(Object.keys(a).some((function(e){return-1!==a[2].toString().indexOf(t.searchValue)})))return a})),e=a.filter((function(t){return void 0!==t}));this.catchData=e,document.getElementById("Product").innerHTML="",this.pagination(this.catchData,1),this.pageSelect()},addCart:function(t){void 0===this.cartData[0]&&(this.CartInNothing=!this.CartInNothing),this.ProdcutData[t][5]=!this.ProdcutData[t][5],this.pageSelect(),this.cartData=this.catchData.filter((function(t){return!0===t[5]}))},backData:function(t){console.log(this.catchData[t]);var a=[[this.catchData[t][0],this.catchData[t][1],this.catchData[t][2],this.catchData[t][3],this.catchData[t][4],this.catchData[t][5],this.catchData[t][6],this.catchData[t][7],this.catchData[t][8],this.catchData[t][9],this.catchData[t][10]]],e={};e={url:"https://docs.google.com/spreadsheets/d/1LhZ_9DO6JNX2Q7DO_HKRVDoGtyRGEp2ne-m_aIlYQq4/edit#gid=0",name:"工作表1",data:a.toString(),row:this.catchData[t][0],column:this.catchData[t].length},m.a.get("https://script.google.com/macros/s/AKfycbzKEwZkfPc610W7d8w8cktq6OO2R8Tfw6GgmHe1aZVGDbkXlGQ/exec",e),window.setTimeout(window.location.href="productSingle.html",2e3)}},mounted:function(){var t=this;fetch("https://script.google.com/macros/s/AKfycbwzGM7BJ8SnGD626ebzQi3xGdBsJzUlOSdiDIkMmBhplN65FtQ/exec").then((function(t){return t.json()})).then((function(a){t.ProdcutData=a,t.CatchProductItem("All")}))}},D=y,k=(e("1b21"),Object(u["a"])(D,p,j,!1,null,"67c58f22",null)),_=k.exports,w={components:{productItem:_}},P=w,C=(e("9964"),Object(u["a"])(P,h,b,!1,null,"0056b010",null)),T=C.exports,I=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("div",{staticClass:"sciocal"},[e("i",{staticClass:"fab fa-instagram",attrs:{href:"https://www.instagram.com/miruku.acc/"}}),e("a",{attrs:{href:"https://www.instagram.com/miruku.acc/"}},[t._v("miruku.acc")]),e("button",{staticClass:"my-2"},[e("a",{attrs:{href:"https://www.instagram.com/miruku.acc/"}},[t._v("follow")])])]),e("a",[t._v("© 2020.09.30 By Pito")])])}],z=(e("d6cb"),{}),O=Object(u["a"])(z,I,x,!1,null,"78dc8714",null),S=O.exports,E={name:"app",data:function(){return{scrollTop:""}},components:{Navbar:f,Production:T,Footer:S},mounted:function(){var t=this;window.onscroll=function(){t.scrollTop=document.documentElement.scrollTop||document.body.scrollTop}},watch:{scrollTop:function(){var t=document.getElementById("nav"),a=document.getElementById("Production"),e=t.offsetHeight;this.scrollTop>e?(a.style.marginTop="68px",t.style.backgroundColor="var(--background-color)",t.style.position="fixed"):(a.style.marginTop="0px",t.style.position="relative",t.style.backgroundColor="#ffffff");var s=document.getElementById("categoryLIst"),c=s.offsetHeight;this.scrollTop>c?(s.style.backgroundColor="var(--background-color)",s.style.position="fixed",s.style.width="20%",s.style.top="69px",s.style.opacity="0.7"):(s.style.position="relative",s.style.backgroundColor="var(--product-bg-color)",s.style.width="100%",s.style.top="0px",s.style.opacity="1")}}},M=E,B=(e("928c"),Object(u["a"])(M,c,n,!1,null,null,null)),N=B.exports,L=e("28dd");s["a"].prototype.$=m.a,s["a"].use(e("2ead")),s["a"].use(L["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(N)}}).$mount("#app")},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(t){var a=n(t);return e(a)}function n(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}c.keys=function(){return Object.keys(s)},c.resolve=n,t.exports=c,c.id="4678"},"652c":function(t,a,e){},"928c":function(t,a,e){"use strict";var s=e("0470"),c=e.n(s);c.a},9679:function(t,a,e){},9964:function(t,a,e){"use strict";var s=e("a27b"),c=e.n(s);c.a},"9b47":function(t,a,e){t.exports=e.p+"assets/img/logo.a1002524.png"},a27b:function(t,a,e){},ce9f:function(t,a,e){"use strict";var s=e("652c"),c=e.n(s);c.a},d6cb:function(t,a,e){"use strict";var s=e("9679"),c=e.n(s);c.a}});
//# sourceMappingURL=index.7506f2ac.js.map