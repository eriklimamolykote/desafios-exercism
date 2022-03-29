const TRANSCRIPTION = {

    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A',

};

function invalidInput() {

    throw new Error( 'Invalid input for DNA. Try again.' );

};

export function toRna( sequence ) {

    return sequence
        .split( '' )
        .map( nucleotide => TRANSCRIPTION[ nucleotide ] || invalidInput() )
        .join( '' );

}