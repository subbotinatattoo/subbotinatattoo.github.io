parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L4bL":[function(require,module,exports) {
function n(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t.split(".").reduce(function(n,t){return n&&n[t]},n)||e}var t=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return function(n){return t.reduce(function(n,t){return t(n)},n)}},e="269650371";function r(t){return t.filter(function(t){return n(t,"node.owner.id","")===e})}var a=[150,240,320,480,640],c=window,o=c.innerWidth,u=o/3|0,i=a.findIndex(function(n){return n>=u}),d=-1===i?4:i;function s(t){return t.map(function(t){var e=t.node;return{url:e.shortcode,src:n(e,"thumbnail_resources.".concat(d,".src"))}}).filter(Boolean)}function f(t){return t.sort(function(t,e){return n(e,"node.taken_at_timestamp")-n(t,"node.taken_at_timestamp")})}function l(n){return n.slice(0,12)}function h(n,t){var e=document.createElement("ul");n.forEach(function(n,t){var r=n.src,a=n.url,c=document.createElement("li");c.className="feed_item",c.innerHTML='<a href="https://www.instagram.com/p/'.concat(a,'/"><img class="feed_img" src="').concat(r,'" alt="').concat(t,'"/></a>'),e.appendChild(c)}),t.appendChild(e)}var m=20,g=document.getElementById("feed"),p="https://www.instagram.com/graphql/query/?query_hash=f92f56d47dc7a55b606908374b43a314&variables=%7B%22tag_name%22%3A%22subbotinatattoo%22%2C%22first%22%3A12%2C%22after%22%3A%22QVFDNGswYVoyUjEycnZGaTROc09CcEcyU1VDS0tBdm9QR3F1WUhMQWhWWmlRRG1SdzFkeWpOaDFVbjdWTFpIZ2V5dHJKVlRfRnd2clRwR1FmUkFqdUdUUQ%3D%3D%22%7D";fetch(p).then(function(e){200===e.status?e.json().then(function(e){var a=n(e.data,"hashtag.edge_hashtag_to_media.edges",[]),c=t(r,f,s,l)(a);c.length&&h(c,g)}).catch(console.error):console.error(e)}).catch(console.error);
},{}]},{},["L4bL"], null)
//# sourceMappingURL=/script.d573be0b.js.map