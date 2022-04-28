//
// This is  only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isSilence = message => /^\s*$/.test( message )
const isShouting = message => /^[^A-Za-z]*[A-Z]+(?:[^a-z]*)$/.test( message )
const isAsking = message => /\?\s*$/.test( message )

export const hey = ( message ) => {

    if ( isSilence( message ) ) {

        return 'Fine. Be that way!';

    }

    if ( isShouting( message ) ) {

        return isAsking( message ) ? "Calm down, I know what I'm doing!"
            : 'Whoa, chill out!'

    }

    return isAsking( message ) ? 'Sure.' : 'Whatever.'

};