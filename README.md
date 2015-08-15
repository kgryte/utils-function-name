Function name
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns the name of a function.


## Installation

``` bash
$ npm install utils-function-name
```


## Usage

``` javascript
var fname = require( 'utils-function-name' );
```

#### fname( fcn )

Returns the name of a `function`.

``` javascript
var name = fname( Math.sqrt )
// returns 'sqrt'
```

If provided an __anonymous__ `function`, the function returns `anonymous`.

``` javascript
var name = fname( function(){} );
// returns 'anonymous'
```

If provided a value which is not a `function`, the function __throws__ a `TypeError`.

``` javascript
try {
	// throws...
	var name = fname( 'beep' );
} catch ( err ) {
	console.error( err );
}
```


## Examples

``` javascript
var fname = require( 'utils-function-name' );

console.log( fname( Math.sqrt ) );
// returns 'sqrt'

console.log( fname( Float64Array ) );
// returns 'Float64Array'

console.log( fname( Buffer ) );
// returns 'Buffer'

console.log( fname( Date ) );
// returns 'Date'

console.log( fname( String ) );
// returns 'String'

console.log( fname( Boolean ) );
// returns 'Boolean'

console.log( fname( Function ) );
// returns 'Function'

console.log( fname( Number ) );
// returns 'Number'

console.log( fname( function(){} ) );
// returns 'anonymous'
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-function-name.svg
[npm-url]: https://npmjs.org/package/utils-function-name

[travis-image]: http://img.shields.io/travis/kgryte/utils-function-name/master.svg
[travis-url]: https://travis-ci.org/kgryte/utils-function-name

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/utils-function-name/master.svg
[codecov-url]: https://codecov.io/github/kgryte/utils-function-name?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-function-name.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-function-name

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-function-name.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-function-name

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-function-name.svg
[github-issues-url]: https://github.com/kgryte/utils-function-name/issues
