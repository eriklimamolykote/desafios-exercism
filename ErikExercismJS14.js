/// <reference path="./global.d.ts" />
// @ts-check

/** 
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the tests. Here an 
 * example of the syntax as reminder:
 * 
 * export function yourFunction(...) {
 *  ...
 * }
 */

export function cookingStatus( remainingtime ) {

    if ( remainingtime === 0 ) {

        return 'Lasagna is done.';

    }

    if ( !remainingtime ) {

        return 'You forgot to set the timer.';

    }

    return 'Not done, please wait.';

}

export function preparationTime( layers, averagePreparationTime = 2 ) {

    return layers.length * averagePreparationTime;

}

export function quantities( layers ) {

    return {

        noodles: layers.filter( ( layer ) => layer === 'noodles' ).length * 50,
        sauce: layers.filter( ( layer ) => layer === 'sauce' ).length * 0.2,

    }

}

export function addSecretIngredient( friendsList, myList ) {

    const secretIngredient = friendsList[ friendsList.length - 1 ];

    myList.push( secretIngredient );

}

export function scaleRecipe( recipe, portions ) {

    const scaled = { ...recipe };
    const factor = portions / 2;

    for ( let ingredient in scaled ) {

        scaled[ ingredient ] *= factor;

    }

    return scaled;
    
}