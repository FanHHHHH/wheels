(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{397:function(e,t,n){},398:function(e,t,n){},494:function(e,t,n){"use strict";n(397)},495:function(e,t,n){"use strict";n(398)},548:function(e,t,n){"use strict";n.r(t);var o=n(318),c=n(319),d={components:{BTable:o.a,BTableColumn:c.a},data:function(){return{orderBy:{name:!0,score:"desc"},dataSource:[{id:1,name:"hf",score:100,description:"aaa bbb"},{id:2,name:"wzx",score:99,description:"ccc ddd"},{id:3,name:"aa",score:99},{id:4,name:"bb",score:99},{id:5,name:"cc",score:99},{id:6,name:"dd",score:99},{id:7,name:"ee",score:99},{id:8,name:"ff",score:99},{id:9,name:"gg",score:99},{id:10,name:"hh",score:99}],selected:[],loading:!1}},methods:{x:function(){console.log("sort callback")},edit:function(e){console.log(e)},view:function(e){console.log(e)}}},s=(n(494),n(495),n(41)),r=Object(s.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[e._v("\n  当前选中"+e._s(e.selected)+"\n  "),n("b-table",{attrs:{bordered:"",striped:"",checkable:"",indexIsVisable:"","selected-items":e.selected,"order-by":e.orderBy,"data-source":e.dataSource},on:{"update:orderBy":[e.x,function(t){e.orderBy=t}],"update:selectedItems":function(t){e.selected=t},"update:selected-items":function(t){e.selected=t},"update:order-by":function(t){e.orderBy=t}},scopedSlots:e._u([{key:"default",fn:function(t){return[n("button",{on:{click:function(n){return e.edit(t.item)}}},[e._v("编辑")]),e._v(" "),n("button",{on:{click:function(n){return e.view(t.item)}}},[e._v("查看")])]}}])},[n("b-table-column",{attrs:{text:"姓名",field:"name",width:300},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.value)+"\n      ")]}}])}),e._v(" "),n("b-table-column",{attrs:{text:"分数",field:"score",width:80},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.value)+"\n      ")]}}])})],1)],1)}),[],!1,null,"526d9750",null);t.default=r.exports}}]);