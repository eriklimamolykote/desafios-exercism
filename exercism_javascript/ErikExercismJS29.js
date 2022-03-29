const EARTH_YEAR_IN_S = 31557600
const ORBITAL_PERIODS = {

    Earth: 1,
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132

};

/**
 * Normalizes a planet name to be capitalized and looks up the orbital period
 * 
 * @param {string} planet the planet name
 * @return {number} the orbital period
 */

function getOrbitalPeriod( planet ) {

    const [ p, ...lanet ] = planet

    return ORBITAL_PERIODS[ [ p.toUpperCase(), ...lanet ].join( '' ) ]

}

/**
 * Calculate the age on a planet given the age on earth
 * 
 * @param {string} planet the planet name
 * @param {number} earthAgeInS the age on earth in seconds
 */

export function age( planet, earthAgeInS ) {

    return + ( earthAgeInS / EARTH_YEAR_IN_S / getOrbitalPeriod( planet ) ).toFixed( 2 )
    
}