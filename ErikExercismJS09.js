// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */

 var time;   
 export function timeToMixJuice(name) {

    let timeToMixJuice;

    switch ( name ) {

        case 'Pure Strawberry Joy':
            timeToMixJuice = 0.5;
            break;

        case 'Energizer':
        case 'Green Garden':
            timeToMixJuice = 1.5;
            break;
            
        case 'Tropical Island':
            timeToMixJuice = 3;
            break;
            
        case 'All or Nothing':
            timeToMixJuice = 5;
            break;
            
        default:
            timeToMixJuice = 2.5;
            break;    

    }

    return timeToMixJuice;

 }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  export function limesToCut(wedgesNeeded, limes) {

    if (limes.length < 1 ) {

        return 0;

    }

    let cutLimes = 0;
    let wedgesCut = 0;

    while ( wedgesNeeded > wedgesCut && limes[ cutLimes ] ){

        wedgesCut += wedgesFromSize( limes[ cutLimes ] );
        cutLimes++;

    }

    return cutLimes;

  }

  const wedgesFromSize = ( size ) => {

    if ( size === 'small' ) return 6;
    else if ( size === 'medium' ) return 8;
    else if ( size === 'large' ) return 10;

  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {

    do {

        timeLeft = timeLeft - timeToMixJuice( orders[ 0 ] );
        orders.shift();

    } while ( timeLeft > 0 );

    return orders;

  }