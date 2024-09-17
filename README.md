<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sargs2multislice

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a [`MultiSlice`][@stdlib/slice/multi] object from a comma-separated list of string-serialized [`MultiSlice`][@stdlib/slice/multi] constructor arguments.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/slice-base-sargs2multislice
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var sargs2multislice = require( '@stdlib/slice-base-sargs2multislice' );
```

<a name="main"></a>

#### sargs2multislice( str )

Creates a [`MultiSlice`][@stdlib/slice/multi] object from a comma-separated list of string-serialized [`MultiSlice`][@stdlib/slice/multi] constructor arguments.

```javascript
var s = sargs2multislice( '0,Slice(2,10,1),1' );
// returns <MultiSlice>

var d = s.data;
// returns [ 0, <Slice>, 1 ]
```

The function returns `null` if provided an invalid string.

```javascript
var s = sargs2multislice( 'foo,bar' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function is useful from wanting to create a [`MultiSlice`][@stdlib/slice/multi] object from an array of constructor arguments which has been serialized to a string (e.g., when working with [`Proxy`][@stdlib/proxy/ctor] objects supporting slicing].

    ```javascript
    var Slice = require( '@stdlib/slice-ctor' );

    var args = [ 0, new Slice( 2, 10, 1 ), 1 ];

    // ...

    var sargs = args.toString();
    // returns '0,Slice(2,10,1),1'

    // ...

    var s = sargs2multislice( sargs );
    // returns <MultiSlice>

    var d = s.data;
    // returns [ 0, <Slice>, 1 ]
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sargs2multislice = require( '@stdlib/slice-base-sargs2multislice' );

var s = sargs2multislice( 'null,null,null' );
var d = s.data;
// returns [ null, null, null ]

s = sargs2multislice( '10,Slice(2,10,1),null' );
d = s.data;
// returns [ 10, <Slice>, null ]

s = sargs2multislice( '2,Slice(2,10,1),-5' );
d = s.data;
// returns [ 2, <Slice>, -5 ]

s = sargs2multislice( 'foo,bar' );
// returns null
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/slice-base/args2multislice`][@stdlib/slice/base/args2multislice]</span><span class="delimiter">: </span><span class="description">create a MultiSlice object from a list of MultiSlice constructor arguments.</span>
-   <span class="package-name">[`@stdlib/slice-base/seq2multislice`][@stdlib/slice/base/seq2multislice]</span><span class="delimiter">: </span><span class="description">convert a multidimensional subsequence string to a MultiSlice object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/slice-base-sargs2multislice.svg
[npm-url]: https://npmjs.org/package/@stdlib/slice-base-sargs2multislice

[test-image]: https://github.com/stdlib-js/slice-base-sargs2multislice/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/slice-base-sargs2multislice/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/slice-base-sargs2multislice/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/slice-base-sargs2multislice?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/slice-base-sargs2multislice.svg
[dependencies-url]: https://david-dm.org/stdlib-js/slice-base-sargs2multislice/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/slice-base-sargs2multislice/tree/deno
[deno-readme]: https://github.com/stdlib-js/slice-base-sargs2multislice/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/slice-base-sargs2multislice/tree/umd
[umd-readme]: https://github.com/stdlib-js/slice-base-sargs2multislice/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/slice-base-sargs2multislice/tree/esm
[esm-readme]: https://github.com/stdlib-js/slice-base-sargs2multislice/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/slice-base-sargs2multislice/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/slice-base-sargs2multislice/main/LICENSE

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice-multi

[@stdlib/proxy/ctor]: https://github.com/stdlib-js/proxy-ctor

<!-- <related-links> -->

[@stdlib/slice/base/args2multislice]: https://github.com/stdlib-js/slice-base-args2multislice

[@stdlib/slice/base/seq2multislice]: https://github.com/stdlib-js/slice-base-seq2multislice

<!-- </related-links> -->

</section>

<!-- /.links -->
