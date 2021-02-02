!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SapphireUtilities={})}(this,(function(e){"use strict";function isObject(e){return!("object"!=typeof e||!e)&&e.constructor===Object}const t=["string","bigint","number","boolean"];function isPrimitive(e){return t.includes(typeof e)}function deepClone(e){if(null===e||isPrimitive(e))return e;if(Array.isArray(e)){const t=[];for(const n of e)t.push(deepClone(n));return t}if(isObject(e)){const t={};for(const[n,r]of Object.entries(e))t[n]=deepClone(r);return t}if(e instanceof Map){const t=new e.constructor;for(const[n,r]of e.entries())t.set(n,deepClone(r));return t}if(e instanceof Set){const t=new e.constructor;for(const n of e.values())t.add(deepClone(n));return t}return e}e.chunk=function chunk(e,t){if(!Array.isArray(e))throw new TypeError("entries must be an array.");if(!Number.isInteger(t))throw new TypeError("chunkSize must be an integer.");if(t<1)throw new RangeError("chunkSize must be 1 or greater.");const n=e.slice(),r=[];for(;n.length;)r.push(n.splice(0,t));return r},e.deepClone=deepClone,e.isObject=isObject,e.isPrimitive=isPrimitive,e.mergeDefault=function mergeDefault(e,t){if(!t)return deepClone(e);for(const[n,r]of Object.entries(e)){const e=Reflect.get(t,n);void 0===e?Reflect.set(t,n,deepClone(r)):isObject(e)&&Reflect.set(t,n,mergeDefault(null!=r?r:{},e))}return t},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
