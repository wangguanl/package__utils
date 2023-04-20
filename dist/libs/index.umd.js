!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("utils",[],t):"object"==typeof exports?exports.utils=t():e.utils=t()}(self,(function(){return function(){"use strict";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{debounce:function(){return d},deepCopy:function(){return u},deepMerge:function(){return l},formatDate:function(){return s},getUrlKey:function(){return b},humpToSplit:function(){return C},isArrayNested:function(){return c},mouseClick:function(){return p},mouseScroll:function(){return g},parseQueryString:function(){return x},parseQueryString2:function(){return j},pxToRem:function(){return A},queryStringSlice:function(){return v},recursionSegments:function(){return a},remToPx:function(){return T},splitToHump:function(){return S},stringifyQuery:function(){return y},stringifyQuerySlice:function(){return m},throttle:function(){return h},transDate:function(){return f},unique:function(){return n},validation:function(){return i},verifyVar:function(){return o}});var r={table:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"],UTF16ToUTF8:function(e){for(var t=[],r=e.length,n=0;n<r;n++){var o=e.charCodeAt(n);if(o>0&&o<=127)t.push(e.charAt(n));else if(o>=128&&o<=2047){let e=192|o>>6&31,r=128|63&o;t.push(String.fromCharCode(e),String.fromCharCode(r))}else if(o>=2048&&o<=65535){let e=224|o>>12&15,r=128|o>>6&63,n=128|63&o;t.push(String.fromCharCode(e),String.fromCharCode(r),String.fromCharCode(n))}}return t.join("")},UTF8ToUTF16:function(e){for(var t=[],r=e.length,n=0;n<r;n++){var o=e.charCodeAt(n);if(0==(o>>7&255))t.push(e.charAt(n));else if(6==(o>>5&255)){let r=(31&o)<<6|63&e.charCodeAt(++n);t.push(String.fromCharCode(r))}else if(14==(o>>4&255)){let r=e.charCodeAt(++n),i=(255&(o<<4|r>>2&15))<<8|((3&r)<<6|63&e.charCodeAt(++n));t.push(String.fromCharCode(i))}}return t.join("")},encode:function(e){if(!e)return"";for(var t=this.UTF16ToUTF8(e),r=0,n=t.length,o=[];r<n;){var i=255&t.charCodeAt(r++);if(o.push(this.table[i>>2]),r===n){o.push(this.table[(3&i)<<4]),o.push("==");break}var u=t.charCodeAt(r++);if(r===n){o.push(this.table[(3&i)<<4|u>>4&15]),o.push(this.table[(15&u)<<2]),o.push("=");break}var l=t.charCodeAt(r++);o.push(this.table[(3&i)<<4|u>>4&15]),o.push(this.table[(15&u)<<2|(192&l)>>6]),o.push(this.table[63&l])}return o.join("")},decode:function(e){if(!e)return"";for(var t=e.length,r=0,n=[];r<t;){let t=this.table.indexOf(e.charAt(r++)),o=this.table.indexOf(e.charAt(r++)),i=this.table.indexOf(e.charAt(r++)),u=this.table.indexOf(e.charAt(r++)),l=t<<2|o>>4,a=(15&o)<<4|i>>2,c=(3&i)<<6|u;n.push(String.fromCharCode(l)),64!==i&&n.push(String.fromCharCode(a)),64!==u&&n.push(String.fromCharCode(c))}return this.UTF8ToUTF16(n.join(""))}},n=()=>{var e=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?r:3&r|8).toString(16)}));return r.encode(t)},o=(e,t)=>{const r={"[object String]":"string","[object Object]":"object","[object Number]":"number","[object Boolean]":"boolean","[object Array]":"array","[object Undefined]":"undefined","[object Arguments]":"arguments","[object Function]":"function","[object Null]":"null","[object Date]":"date","[object JSON]":"json","[object RegExp]":"regexp"};let n=r[Object.prototype.toString.call(e)];return"string"===r[Object.prototype.toString.call(t)]?n===t.replace(/\s+/g,"").toLocaleLowerCase():n},i=(()=>{const e={empty:e=>Array.isArray(e)&&e.length>0||"[object Object]"===Object.prototype.toString.call(e)&&"{}"!==JSON.stringify(e)||"string"==typeof e?e.length>0:(e+"").length>0,url:e=>/^(http|https):/.test(e),money:e=>/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(e),alphabets:e=>/^[A-Za-z]+$/.test(e),float:e=>/^-?[1-9]\d*\.\d+$|^-?0\.\d+$|^-?[1-9]\d*$|^0$/.test(e),chinese:e=>/^[\u4e00-\u9fa5]{0,}$/.test(e),placeholder:()=>!0,email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)};return(t,r)=>{const n=(t=>(r,n)=>{let{type:o,validation:i,success:u,error:l}=n;const a=i?i(t[r]):e[o](t[r]);return a?u&&u():l&&l(),a})(r);for(let e in t)if(Array.isArray(t[e])){for(let r=0;r<t[e].length;r++)if(!n(e,t[e][r]))return t[e][r]}else if(!n(e,t[e]))return t[e];return!0}})();function u(e){var t;if("object"==typeof e){t=Array.isArray(e)?[]:{};for(let r in e)t[r]="object"==typeof e[r]?u(e[r]):e[r]}else t=e;return t}function l(e,t){let r;for(r in t)e[r]&&Array.isArray(e[r])&&t[r]&&Array.isArray(t[r])?e[r]=e[r].concat(t[r]):e[r]&&"[object Object]"===e[r].toString()&&t[r]&&"[object Object]"===t[r].toString()?e[r]=l(e[r],t[r]):e[r]=t[r];return e}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;const n=e.shift();return e.length?(-1===Object.keys(t).indexOf(n)&&(t[n]={}),a(e,t[n],r)):t[n]=r,t}var c=e=>Array.isArray(e)&&e.length&&e.every((e=>Array.isArray(e)));const s=(e,t)=>{if(!e)return"";10===String(e).length&&(e*=1e3);var r=new Date(e),n=r.getFullYear(),o=r.getMonth()+1,i=r.getDate(),u=r.getHours(),l=r.getMinutes(),a=r.getSeconds();return"YYYY"===t?n:"YYYY-MM"===t?n+"-"+(o<10?"0"+o:o):"YYYY-MM-DD"===t?n+"-"+(o<10?"0"+o:o)+"-"+(i<10?"0"+i:i):"HH:mm:ss"===t?(u<10?"0"+u:u)+":"+(l<10?"0"+l:l)+":"+(a<10?"0"+a:a):"YYYY-MM-DD HH:mm"===t?n+"-"+(o<10?"0"+o:o)+"-"+(i<10?"0"+i:i)+" "+(u<10?"0"+u:u)+":"+(l<10?"0"+l:l):"YYYY-MM-DD HH:mm:ss"===t?n+"-"+(o<10?"0"+o:o)+"-"+(i<10?"0"+i:i)+" "+(u<10?"0"+u:u)+":"+(l<10?"0"+l:l)+":"+(a<10?"0"+a:a):"--"},f=e=>e.getFullYear()+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate().toString():e.getDate().toString()),h=(()=>{let e=0;return function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=(new Date).valueOf();n-e>r&&(t?.(),e=n)}})(),d=(()=>{let e;return function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;clearTimeout(e),e=setTimeout((()=>t?.()),r)}})(),g=()=>{let e;return t=>{let{el:r,time:n=300,fn:o}=t;r.addEventListener("scroll",(()=>{let t=r.scrollHeight,i=r.scrollTop,u=r.clientHeight;clearTimeout(e),e=setTimeout((()=>{i+u>t-20&&o&&o()}),n)}))}},p=()=>{let e;return t=>{let{el:r,time:n=300,fn:o}=t;r.addEventListener("keyup",(()=>{clearTimeout(e),e=setTimeout((()=>{o&&o()}),n)}))}},b=(e,t)=>decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(e)||[null,""])[1].replace(/\+/g,"%20"))||null,y=e=>{let t="";for(let r in e)void 0===e[r]&&(e[r]=""),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r])+"&";return t},m=(e,t)=>{let r="";for(let n in e)t&&t!==n&&(r+=e[n]+"&");return r.slice(0,-1)},x=e=>{var t={};return e.substr(e.indexOf("?")+1).split("&").forEach((e=>{var r=e.split("=");t[r[0]]=r[1]})),t},j=e=>e.match(/([^?=&]+)(=([^&]*))/g).reduce(((e,t)=>(e[t.slice(0,t.indexOf("="))]=t.slice(t.indexOf("=")+1),e)),{}),v=(e,t)=>e.replace(new RegExp(`${t}=\\d*(&?)|(&?)${t}=\\d*`,"g"),""),C=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.replace(/([A-Z])/g,`${t}$1`).toLowerCase()},S=e=>e.replace(/-(\w)/g,((e,t)=>t.toUpperCase())),A=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/\d+px/g,(t=>1*(parseInt(t)/parseInt(e)).toFixed(3)+"rem"))},T=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/(\d+\.?\d{0,3})rem/gi,((t,r)=>Math.floor(r*e)+"px"))};return t}()}));