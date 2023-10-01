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

var tape = require( 'tape' );
var isSlice = require( '@stdlib/assert-is-slice' );
var isMultiSlice = require( '@stdlib/assert-is-multi-slice' );
var S = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var sargs2multislice = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sargs2multislice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `null` if provided a first argument which is not a valid input string', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'bar',
		'Slice',
		'Slice()',
		'Slice(null)',
		'Slice(2,10)',
		'Slice(10)',
		'Slice(1,2,3,4)',
		'S(2,3,4)',
		'Slice(2,10,2',
		'Slice(',
		'Slice(2,10,1.5)',
		'Slice(foo,bar,beep)',
		'Multi()',
		'MultiSlice',
		'MultiSlice(',
		'MultiSlice()',
		'foo,bar,beep',
		'MultiSlice(foo)',
		'MultiSlice(foo,bar)',
		'MultiSlice(1,2,3',
		'M(2,3,4)',
		'MultiSlice(Slice)',
		'MultiSlice(Slice())',
		'MultiSlice(Slice(null))',
		'MultiSlice(Slice(2,10))',
		'MultiSlice(Slice(10))',
		'MultiSlice(Slice(1,2,3,4))',
		'MultiSlice(S(2,3,4))',
		'MultiSlice(Slice(2,10,2)',
		'MultiSlice(Slice()',
		'MultiSlice(Slice(2,10,1.5))',
		'MultiSlice(Slice(foo,bar,beep))'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( sargs2multislice( values[ i ] ), null, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function parses a comma-separated list of constructor arguments', function test( t ) {
	var expected;
	var actual;
	var values;
	var data;
	var v;
	var e;
	var s;
	var i;
	var j;

	values = [
		'null, Slice( null, null, null )',
		'Slice( 2, 10, 2 ), 10',
		'Slice( -2, -10, -2 )',
		'Slice( null, 10, 2 ), 10, null',
		'2, 10, Slice( 2, null, 2 )',
		'null, 10, Slice( 2, 10, null )',
		'null, null, Slice( null, null, 2 ), 10',
		'2, 10, 4, Slice( 2, null, null )',
		'Slice( null, 10, null ), 1, 2, 3, 4',
		'Slice( -1, null, -2 ), Slice( 2, 10, 1 )',
		'',
		'null',
		'2, 10, 1',
		'2',
		',,',
		'undefined,undefined'
	];

	/* eslint-disable new-cap */

	expected = [
		new MultiSlice( null, S( null, null, null ) ),
		new MultiSlice( S( 2, 10, 2 ), 10 ),
		new MultiSlice( S( -2, -10, -2 ) ),
		new MultiSlice( S( null, 10, 2 ), 10, null ),
		new MultiSlice( 2, 10, S( 2, null, 2 ) ),
		new MultiSlice( null, 10, S( 2, 10, null ) ),
		new MultiSlice( null, null, S( null, null, 2 ), 10 ),
		new MultiSlice( 2, 10, 4, S( 2, null, null ) ),
		new MultiSlice( S( null, 10, null ), 1, 2, 3, 4 ),
		new MultiSlice( S( -1, null, -2 ), S( 2, 10, 1 ) ),
		new MultiSlice(),
		new MultiSlice( null ),
		new MultiSlice( 2, 10, 1 ),
		new MultiSlice( 2 ),
		new MultiSlice( void 0, void 0, void 0 ),
		new MultiSlice( void 0, void 0 )
	];

	/* eslint-enable new-cap */

	for ( i = 0; i < values.length; i++ ) {
		actual = sargs2multislice( values[ i ] );
		e = expected[ i ].data;
		data = actual.data;

		t.strictEqual( isMultiSlice( actual ), true, 'returns expected value. i: ' + i + '.' );
		t.strictEqual( actual.ndims, expected[ i ].ndims, 'returns expected value. i: ' + i + '.' );
		t.strictEqual( data.length, e.length, 'returns expected value. i: ' + i + '.' );
		for ( j = 0; j < e.length; j++ ) {
			s = data[ j ];
			v = e[ j ];
			if ( isSlice( v ) ) {
				t.strictEqual( s.start, v.start, 'returns expected value. i: ' + i + '. j: ' + j + '.' );
				t.strictEqual( s.stop, v.stop, 'returns expected value. i: ' + i + '. j: ' + j + '.' );
				t.strictEqual( s.step, v.step, 'returns expected value. i: ' + i + '. j: ' + j + '.' );
			} else {
				t.strictEqual( s, v, 'returns expected value. i: ' + i + '. j: ' + j + '.' );
			}
		}
	}
	t.end();
});
