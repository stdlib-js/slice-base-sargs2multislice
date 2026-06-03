"use strict";var r=function(e,l){return function(){return l||e((l={exports:{}}).exports,l),l.exports}};var n=r(function(m,i){
var u=require('@stdlib/string-base-replace/dist'),c=require('@stdlib/slice-base-str2multislice/dist');function a(e){return e=u(e,/^,/,"null,"),e=u(e,/,$/,",null"),e=u(e,/,(?=,)/g,",null"),e=u(e,/undefined/g,"null"),c("MultiSlice("+e+")")}i.exports=a
});var t=n();module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
