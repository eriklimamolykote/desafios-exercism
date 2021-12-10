// @ts-check

export const knightIsAwake = true;
export const archerIsAwake = true;
export const prisonerIsAwake = true;
export const petDogIsPresent = true;

/**
 * The fast attack is available when the knight is sleeping
 * 
 * @param { boolean } knightIsAwake
 * 
 * @return { boolean } Whether or not you can execute a fast attack.
 */

export function canExecuteFastAttack( knightIsAwake ) {

    if ( knightIsAwake ) {

        return false;
        
    }

    else if ( !knightIsAwake) {

        return true;

    }

}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 * 
 * @param { boolean } knightIsAwake
 * @param { boolean } archerIsAwake
 * @param { boolean } prisonerIsAwake
 * 
 * @return { boolean } Whether or not you can spy on someone.
 */

export function canSpy( knightIsAwake, archerIsAwake, prisonerIsAwake ) {

    // When prisonerIsAwake == true

    if ( !knightIsAwake && !archerIsAwake 
        && ( prisonerIsAwake ) ) {

           return true;
    }

    else if ( ( knightIsAwake && archerIsAwake ) 
        && ( prisonerIsAwake ) ) {

            return false;

        }

    else if ( ( knightIsAwake && !archerIsAwake ) 
        && ( prisonerIsAwake ) ) {

            return false;

    }

    else if ( ( !knightIsAwake && archerIsAwake ) 
        && ( prisonerIsAwake ) ) {

            return false;

    }

    // When prisonerIsAwake == false

    if ( !knightIsAwake && !archerIsAwake 
        && ( !prisonerIsAwake ) ) {

           return false;
    }

    else if ( ( knightIsAwake && archerIsAwake ) 
        && ( !prisonerIsAwake ) ) {

            return false;

        }

    else if ( ( knightIsAwake && !archerIsAwake ) 
        && ( !prisonerIsAwake ) ) {

            return false;

    }

    else if ( ( !knightIsAwake && archerIsAwake ) 
        && ( !prisonerIsAwake ) ) {

            return true;

    }

}

/**
 * You'll get caught by the archer if you signal while they're awake.
 * 
 * @param { boolean } archerIsAwake
 * @param { boolean } prisonerIsAwake
 * 
 * @return { boolean } Whether or not you can send a signal to the prisoner.
 */

export function canSignalPrisoner( archerIsAwake, prisonerIsAwake ) {

    // When prisonerIsAwake == true

    if ( ( !archerIsAwake ) && ( prisonerIsAwake ) ) {

        return false;

    }

    else if ( ( archerIsAwake ) && ( prisonerIsAwake ) ) {

        return false;

    }

    // When prisonerIsAwake == false

    if ( ( !archerIsAwake ) && ( !prisonerIsAwake ) ) {

        return true;

    }

    else if ( ( archerIsAwake ) && ( !prisonerIsAwake ) ) {

        return false;

    }


}

/**
 * The final stage in the plan: freeing Annaly's best friend.
 * 
 * @param { boolean } knightIsAwake
 * @param { boolean } archerIsAwake
 * @param { boolean } prisonerIsAwake
 * @param { boolean } petDogIsPresent
 * 
 * @returns { boolean } Whether or not you can free Annalyn's friend.
 */

export function canFreePrisoner( knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent ) {

    // When petDogIsPresent == true

    if ( ( !knightIsAwake && !archerIsAwake ) 
        &&  ( prisonerIsAwake || !prisonerIsAwake ) 
        && petDogIsPresent ) {

        return true;        

    }
    
    else if ( ( knightIsAwake && !archerIsAwake ) 
        && ( prisonerIsAwake || !prisonerIsAwake ) 
        && petDogIsPresent ){

        return false;

    }

    else if ( ( !knightIsAwake && archerIsAwake ) 
        && ( prisonerIsAwake || !prisonerIsAwake ) 
        && petDogIsPresent ) {

            return false;

    }

    // When petDogIsPresent == false
    if ( ( !knightIsAwake && !archerIsAwake ) 
        &&  ( prisonerIsAwake || !prisonerIsAwake ) 
        && !petDogIsPresent ) {

        return false;        

    }
    
    else if ( ( knightIsAwake && !archerIsAwake ) 
        && ( prisonerIsAwake || !prisonerIsAwake ) 
        && !petDogIsPresent ){

        return false;

    }

    else if ( ( !knightIsAwake && archerIsAwake ) 
        && ( prisonerIsAwake || !prisonerIsAwake ) 
        && !petDogIsPresent ) {

            return false;

    }

}