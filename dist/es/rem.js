var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{Q:function(){return r},c:function(){return n}});const r=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/\d+px/g,(t=>1*(parseInt(t)/parseInt(e)).toFixed(3)+"rem"))},n=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/(\d+\.?\d{0,3})rem/gi,((t,r)=>Math.floor(r*e)+"px"))};var o=t.Q,c=t.c;export{o as pxToRem,c as remToPx};