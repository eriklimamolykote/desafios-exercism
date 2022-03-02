// @ts-check

const HOURS_PER_DAY = 8;

/**
 * The day rate, given a rate per hour
 * 
 * @param { number } ratePerHour
 * @return { number } the rate per day
 */

export function dayRate( ratePerHour ) {

    return ratePerHour * HOURS_PER_DAY;

}

/**
 * Calculates the number of days in a budget, rounded down
 * 
 * @param { number } budget: the total budget
 * @param { number } ratePerHour: the rate per hour
 * @return { number } the number of days
 */

export function daysInBudget( budget, ratePerHour ) {

    return Math.floor( budget / dayRate( ratePerHour ) );
}

/**
 * Calculates the discounted rate for large projects, rounded up
 * 
 * @param { number } ratePerHour
 * @param { number } numDays: number of days the project spans
 * @param { number } discount: for example 20% written as 0.2
 * @returns { number } the rounded up discounted
 */

export function priceWithMonthlyDiscount( ratePerHour, numDays, discount ) {

    const [ numMonths, remainingDays ] = [ Math.floor( numDays / 22), numDays % 22 ];
    const dailyRate = dayRate( ratePerHour );

    const total = 
        numMonths * dailyRate * 22 * ( 1 - discount ) +
        remainingDays * dailyRate;

        return Math.ceil( total );

}

const actual = priceWithMonthlyDiscount(16, 130, 0.15);
const expected = 14528;