'use strict';

var fname = require( './../lib' );

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
