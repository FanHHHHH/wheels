(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{301:function(t,e,n){"use strict";var r=n(8),s=n(4),a=n(95),i=n(13),c=n(7),o=n(25),p=n(304),u=n(42),l=n(2),f=n(43),d=n(67).f,g=n(24).f,h=n(9).f,b=n(303).trim,v=s.Number,w=v.prototype,N="Number"==o(f(w)),m=function(t){var e,n,r,s,a,i,c,o,p=u(t,!1);if("string"==typeof p&&p.length>2)if(43===(e=(p=b(p)).charCodeAt(0))||45===e){if(88===(n=p.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(p.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+p}for(i=(a=p.slice(2)).length,c=0;c<i;c++)if((o=a.charCodeAt(c))<48||o>s)return NaN;return parseInt(a,r)}return+p};if(a("Number",!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var y,C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(N?l((function(){w.valueOf.call(n)})):"Number"!=o(n))?p(new v(m(e)),n,C):m(e)},E=r?d(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;E.length>I;I++)c(v,y=E[I])&&!c(C,y)&&h(C,y,g(v,y));C.prototype=w,w.constructor=C,i(s,"Number",C)}},302:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(t,e,n){var r=n(23),s="["+n(302)+"]",a=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},304:function(t,e,n){var r=n(5),s=n(162);t.exports=function(t,e,n){var a,i;return s&&"function"==typeof(a=e.constructor)&&a!==n&&r(i=a.prototype)&&i!==n.prototype&&s(t,i),t}},310:function(t,e,n){},311:function(t,e,n){},313:function(t,e,n){"use strict";n(310)},314:function(t,e,n){"use strict";n(311)},315:function(t,e,n){"use strict";n(163),n(93),n(164),n(301),n(96),n(94);var r=n(29),s=function(t){var e=Object.keys(t),n=!0;return e.forEach((function(t){["span","offset","gutter"].includes(t)||(n=!1)})),n},a={props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:s},narrowPc:{type:Object,validator:s},pc:{type:Object,validator:s},widePc:{type:Object,validator:s}},data:function(){return{gutter:0}},methods:{getClasses:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[];return t?(t.span&&n.push("col-".concat(e).concat(t.span)),t.offset&&n.push("offset-".concat(e).concat(t.offset)),n):[]}},computed:{colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:"".concat(this.gutter/2,"px")}},colClass:function(){var t=this.span,e=this.offset,n=this.ipad,s=this.narrowPc,a=this.pc,i=this.widePc;return[].concat(Object(r.a)(this.getClasses({span:t,offset:e})),Object(r.a)(this.getClasses(n,"ipad-")),Object(r.a)(this.getClasses(s,"narrow-pc-")),Object(r.a)(this.getClasses(a,"pc-")),Object(r.a)(this.getClasses(i,"wide-pc-")))}}},i=(n(313),n(41)),c=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"9e0ad7e0",null);e.a=c.exports},316:function(t,e,n){"use strict";n(93),n(161),n(301),n(94);var r={name:"BlueRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return-1!==["left","right","center"].indexOf(t)}}},mounted:function(){var t=this;this.$children.forEach((function(e){e.gutter=t.gutter}))},computed:{rowStyle:function(){return{marginLeft:-this.gutter/2+"px",marginRight:-this.gutter/2+"px"}},colAlign:function(){var t=this.align;return[t&&"align-"+t]}}},s=(n(314),n(41)),a=Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.colAlign,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"719bcbd9",null);e.a=a.exports},362:function(t,e,n){},459:function(t,e,n){"use strict";n(362)},534:function(t,e,n){"use strict";n.r(e);var r=n(315),s=n(316),a={components:{"b-col":r.a,"b-row":s.a}},i=(n(459),n(41)),c=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("b-row",{staticClass:"row-bg",attrs:{gutter:10}},[e("b-col",{attrs:{span:"6",ipad:{span:6},pc:{span:2},"narrow-pc":{span:4},"wide-pc":{span:1}}},[e("div",{staticClass:"grid-content bg-purple-light"})]),this._v(" "),e("b-col",{attrs:{span:"6",ipad:{span:6},pc:{span:10},"narrow-pc":{span:8},"wide-pc":{span:11}}},[e("div",{staticClass:"grid-content bg-purple"})]),this._v(" "),e("b-col",{attrs:{span:"6",ipad:{span:6},pc:{span:10},"narrow-pc":{span:8},"wide-pc":{span:11}}},[e("div",{staticClass:"grid-content bg-purple-light"})]),this._v(" "),e("b-col",{attrs:{span:"6",ipad:{span:6},pc:{span:2},"narrow-pc":{span:4},"wide-pc":{span:1}}},[e("div",{staticClass:"grid-content bg-purple"})])],1)],1)}),[],!1,null,"112eddd6",null);e.default=c.exports}}]);