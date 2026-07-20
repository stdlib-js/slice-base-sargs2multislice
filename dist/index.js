"use strict";var c=function(e,l){return function(){try{return l||e((l={exports:{}}).exports,l),l.exports}catch(r){throw (l=0, r)}};};var n=c(function(o,i){
var u=require('@stdlib/string-base-replace/dist'),a=require('@stdlib/slice-base-str2multislice/dist');function t(e){return e=u(e,/^,/,"null,"),e=u(e,/,$/,",null"),e=u(e,/,(?=,)/g,",null"),e=u(e,/undefined/g,"null"),a("MultiSlice("+e+")")}i.exports=t
});var g=n();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
