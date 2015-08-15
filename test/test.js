/* global require, describe, it */
'use strict';

var mpath = './../lib';


// MODULES //

var chai = require( 'chai' ),
	proxyquire = require( 'proxyquire' ),
	fname = require( mpath );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'utils-function-name', function tests() {

	function beep() {
		return 'boop';
	}

	it( 'should export a function', function test() {
		expect( fname ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a function', function test() {
		var values = [
			'beep',
			5,
			NaN,
			null,
			true,
			undefined,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				fname( value );
			};
		}
	});

	it( 'should return a function name', function test() {
		assert.strictEqual( fname( beep ), 'beep' );
		assert.strictEqual( fname( Date ), 'Date' );
		assert.strictEqual( fname( Buffer ), 'Buffer' );
		assert.strictEqual( fname( Number ), 'Number' );
		assert.strictEqual( fname( Math.sqrt ), 'sqrt' );
		assert.strictEqual( fname( Int8Array ), 'Int8Array' );
		assert.strictEqual( fname( Boolean ), 'Boolean' );
		assert.strictEqual( fname( String ), 'String' );
		assert.strictEqual( fname( Function ), 'Function' );
	});

	it( 'should handle anonymous functions', function test() {
		/* jshint evil:true */
		assert.strictEqual( fname( function(){} ), 'anonymous' );
		assert.strictEqual( fname( new Function('a', 'b', 'return') ), 'anonymous' );
	});

	it( 'should return a function name in ES5 and earlier environments', function test() {
		var fname = proxyquire( mpath, {
			'validate.io-string-primitive': isString
		});
		assert.strictEqual( fname( beep ), 'beep' );

		function isString() {
			return false;
		}
	});

});
