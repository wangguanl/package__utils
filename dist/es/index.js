var r={242:function(r,t,e){e.d(t,{a:function(){return n}}),t.Z=r=>{};const n=456},977:function(r,t){var e={table:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"],UTF16ToUTF8:function(r){for(var t=[],e=r.length,n=0;n<e;n++){var o=r.charCodeAt(n);if(o>0&&o<=127)t.push(r.charAt(n));else if(o>=128&&o<=2047){let r=192|o>>6&31,e=128|63&o;t.push(String.fromCharCode(r),String.fromCharCode(e))}else if(o>=2048&&o<=65535){let r=224|o>>12&15,e=128|o>>6&63,n=128|63&o;t.push(String.fromCharCode(r),String.fromCharCode(e),String.fromCharCode(n))}}return t.join("")},UTF8ToUTF16:function(r){for(var t=[],e=r.length,n=0;n<e;n++){var o=r.charCodeAt(n);if(0==(o>>7&255))t.push(r.charAt(n));else if(6==(o>>5&255)){let e=(31&o)<<6|63&r.charCodeAt(++n);t.push(String.fromCharCode(e))}else if(14==(o>>4&255)){let e=r.charCodeAt(++n),a=(255&(o<<4|e>>2&15))<<8|((3&e)<<6|63&r.charCodeAt(++n));t.push(String.fromCharCode(a))}}return t.join("")},encode:function(r){if(!r)return"";for(var t=this.UTF16ToUTF8(r),e=0,n=t.length,o=[];e<n;){var a=255&t.charCodeAt(e++);if(o.push(this.table[a>>2]),e===n){o.push(this.table[(3&a)<<4]),o.push("==");break}var i=t.charCodeAt(e++);if(e===n){o.push(this.table[(3&a)<<4|i>>4&15]),o.push(this.table[(15&i)<<2]),o.push("=");break}var h=t.charCodeAt(e++);o.push(this.table[(3&a)<<4|i>>4&15]),o.push(this.table[(15&i)<<2|(192&h)>>6]),o.push(this.table[63&h])}return o.join("")},decode:function(r){if(!r)return"";for(var t=r.length,e=0,n=[];e<t;){let t=this.table.indexOf(r.charAt(e++)),o=this.table.indexOf(r.charAt(e++)),a=this.table.indexOf(r.charAt(e++)),i=this.table.indexOf(r.charAt(e++)),h=t<<2|o>>4,u=(15&o)<<4|a>>2,f=(3&a)<<6|i;n.push(String.fromCharCode(h)),64!==a&&n.push(String.fromCharCode(u)),64!==i&&n.push(String.fromCharCode(f))}return this.UTF8ToUTF16(n.join(""))}};t.Z=()=>{var r=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=(r+16*Math.random())%16|0;return r=Math.floor(r/16),("x"===t?e:3&e|8).toString(16)}));return e.encode(t)}}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return r[n](a,a.exports,e),a.exports}e.d=function(r,t){for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)};var n={};!function(){e.d(n,{B:function(){return t.Z},T:function(){return r.Z},a:function(){return t.a}});var r=e(977),t=e(242)}();var o=n.a,a=n.B,i=n.T;export{o as a,a as test,i as unique};