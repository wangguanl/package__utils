var e={d:function(r,t){for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})},o:function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}},r={};e.d(r,{Q:function(){return t},c:function(){return o}});const t=(e="",r=100)=>e.replace(/\d+px/g,(e=>1*(parseInt(e)/parseInt(r)).toFixed(3)+"rem")),o=(e="",r=100)=>e.replace(/(\d+\.?\d{0,3})rem/gi,((e,t)=>Math.floor(t*r)+"px"));var n=r.Q,a=r.c;export{n as pxToRem,a as remToPx};
//# sourceMappingURL=rem.mjs.map