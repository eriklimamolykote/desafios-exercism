//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = ( str ) => {

    let newString = "";
    
    for ( let i = str.length - 1; i >= 0; i-- ) {

        newString += str[ i ];

    }

    return newString;

  };