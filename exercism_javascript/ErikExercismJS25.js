//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as 
// convenience to get you started writing code faster.
//

// export const colorCode = ( colors ) => {

//     for ( let index in colors ) {

//         switch ( index ) {

//             case 0:

//                 return 'black';
//                 break;

//             case 1:
                
//                 return 'brown';
//                 break;

//             case 2:
                
//                 return 'red';
//                 break;

//             case 3:
                
//                 return 'orange';
//                 break;

//             case 4:
                
//                 return 'yellow';
//                 break;

//             case 5:
                
//                 return 'green';
//                 break;

//             case 6:
                
//                 return 'blue';
//                 break;

//             case 7:
                
//                 return 'violet';
//                 break;

//             case 8:
                
//                 return 'grey';
//                 break;

//             case 9:
                
//                 return 'white';
//                 break;

//         }

//     }

//     return index;

// };

// export const COLORS = undefined;

export const COLORS = [ "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white" ];
export const colorCode = ( color ) => COLORS.indexOf( color );