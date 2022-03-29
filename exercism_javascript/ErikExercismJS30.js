//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writinh code faster.
//

// @ts-check enable

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split( '' );

/**
 * Checks if input is a pangram
 * 
 * @param {Readonly<string>} input
 * @returns {boolean} true if it is, false otherwise
 */


export function isPangram( input) {

    const normalized = input.toLowerCase()

    return ALPHABET.every( ( letter ) => normalized.includes( letter ) )

};