var e={d:function(t,r){for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{$:function(){return o},S:function(){return r}});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.replace(/([A-Z])/g,`${t}$1`).toLowerCase()},o=e=>e.replace(/-(\w)/g,((e,t)=>t.toUpperCase()));var n=t.S,p=t.$;export{n as humpToSplit,p as splitToHump};