var e={d:function(n,r){for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}},n={};e.d(n,{Mx:function(){return o},Oh:function(){return t},dD:function(){return i},hx:function(){return r},jZ:function(){return c},nQ:function(){return u}});const r=(e,n)=>decodeURIComponent((new RegExp("[?|&]"+n+"=([^&;]+?)(&|#|;|$)").exec(e)||[null,""])[1].replace(/\+/g,"%20"))||null,t=e=>{let n="";for(let r in e)void 0===e[r]&&(e[r]=""),n+=encodeURIComponent(r)+"="+encodeURIComponent(e[r])+"&";return n},o=(e,n)=>{let r="";for(let t in e)n&&n!==t&&(r+=e[t]+"&");return r.slice(0,-1)},i=e=>{var n={};return e.substr(e.indexOf("?")+1).split("&").forEach((e=>{var r=e.split("=");n[r[0]]=r[1]})),n},u=e=>e.match(/([^?=&]+)(=([^&]*))/g).reduce(((e,n)=>(e[n.slice(0,n.indexOf("="))]=n.slice(n.indexOf("=")+1),e)),{}),c=(e,n)=>e.replace(new RegExp(`${n}=\\d*(&?)|(&?)${n}=\\d*`,"g"),"");var l=n.hx,a=n.dD,s=n.nQ,f=n.jZ,d=n.Oh,p=n.Mx;export{l as getUrlKey,a as parseQueryString,s as parseQueryString2,f as queryStringSlice,d as stringifyQuery,p as stringifyQuerySlice};
//# sourceMappingURL=parseUrl.mjs.map