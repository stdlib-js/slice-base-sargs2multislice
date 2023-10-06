/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var replace = require( '@stdlib/string-base-replace' );
var str2multislice = require( '@stdlib/slice-base-str2multislice' );


// MAIN //

/**
* Creates a MultiSlice object from a comma-separated list of string-serialized MultiSlice constructor arguments.
*
* @private
* @param {string} str - input string containing constructor arguments
* @returns {(MultiSlice|null)} MultiSlice object (or null)
*
* @example
* var s = sargs2multislice( ',Slice(0,10,1)' );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ null, <Slice> ]
*
* @example
* var s = sargs2multislice( 'Slice(0,10,1),' );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice>, null ]
*
* @example
* var s = sargs2multislice( 'Slice(0,10,1),,,Slice(0,10,1)' );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice>, null, null, <Slice> ]
*
* @example
* var s = sargs2multislice( ',Slice(0,10,1),null,,Slice(2,9,2),null,' );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ null, <Slice>, null, null, <Slice>, null, null ]
*/
function sargs2multislice( str ) {
	// In order to support `x[ [...] ]` syntax, we need to touch up the serialized string due to how `undefined` is serialized...
	str = replace( str, /^,/, 'null,' );        // leading comma (e.g., [ void 0, Slice(0,10,1) ] => ',Slice(0,10,1)')
	str = replace( str, /,$/, ',null' );        // trailing comma (e.g., [ Slice(0,10,1), void 0 ] => 'Slice(0,10,1),')
	str = replace( str, /,(?=,)/g, ',null' );   // between commas (e.g., [ Slice(0,10,1), void 0, void 0, Slice(0,10,1) ] => 'Slice(0,10,1),,,Slice(0,10,1)')
	str = replace( str, /undefined/g, 'null' ); // account for the possibility that the input has been manually serialized
	return str2multislice( 'MultiSlice(' + str + ')' );
}


// EXPORTS //

module.exports = sargs2multislice;
