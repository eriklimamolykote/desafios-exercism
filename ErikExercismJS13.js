// @ts-check

/**
 * Calculates the sum of the two input arrays.
 * 
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum( array1, array2 ) {

    // for ( let i = 0; i <= 9; i++ ) {

    //     array1.push( i );

    // }

    // for ( let j = 0; j <= 9; j++ ) {

    //     array2.push( j );

    // }

    // return Number( array1 ) + Number( array2 );

    return Number( array1.join( '' ) ) + Number( array2.join( '' ) );

}

/** 
 * Checks whether a number is a palindrome.
 * 
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber( value ) {

    // let originalString = String( value );
    // let originalValue = originalString.split;
    // let reversedString = String( originalValue );
    
    // for ( let i = reversedString.length - 1; i >= 0; i-- ) {

    //     reversedString += value[ i ];
    
    // }

    // return reversedString === originalString ? true : false;

    return String( value ) === [ ...String( value ) ].reverse().join( '' );

}

/** 
 * Determines the error message that should be shown to the user
 * for the given input value.
 * 
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage( input ) {

    // throw new Error( 'Implement the errorMessage function' );

    if ( !input ) {

        return 'Required field';

    }

    return Number( input ) ? '' : 'Must be a number besides 0';

}