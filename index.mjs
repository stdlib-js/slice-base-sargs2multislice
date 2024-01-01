// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-str2multislice@v0.1.0-esm/index.mjs";function s(s){return s=e(s,/^,/,"null,"),s=e(s,/,$/,",null"),s=e(s,/,(?=,)/g,",null"),s=e(s,/undefined/g,"null"),l("MultiSlice("+s+")")}export{s as default};
//# sourceMappingURL=index.mjs.map
