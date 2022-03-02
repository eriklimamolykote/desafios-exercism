/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 * 
 * @param {Card[]} deck
 * 
 * @returns {Card} the first card in the deck
 */

export function getFirstCard(deck) {
    return deck.shift();
}

/**
 * Get the second card in the given deck
 * 
 * @param {Card[]} deck
 * 
 * @returns {Card} the second card in the deck
 */
// export function getSecondCard(deck) {
//     return deck.splice(1, 2)[0];
// }
export function getSecondCard([,secondCard]){
    return secondCard;
}

/**
 * Switch the position of the first two cards in the given deck
 * 
 * @param {Card[]} deck
 * 
 * @returns {Card[]} new deck with reordered cards
 */
// export function swapTopTwoCard(deck) {
//     const [firstCard, secondCard, ...rest] = deck;
//     return [secondCard, firstCard, ...rest];
// }
export function swapTopTwoCards([newSecondCard, newFirstCard, ...cards]){
    return [newFirstCard, newSecondCard, ...cards];
}

/**
 * Put the top card of the given deck into a separate discard pile
 * 
 * @param {Card[]} deck
 * 
 * @returns {Card, Card[]} the top card of the given
 * deck and a new deck containing all the other cards
 */
// export function discardTopCard(deck) {
//     const [top, ...rest] = deck;
//     return [top, rest];
// }
export function discardTopCard([topCard, ...notTopCards]){
    return [topCard, notTopCards];
}

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 * 
 * @param {Card[]} deck
 * 
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
// export function insertFaceCards(deck) {
//     if (deck.length === 0){
//         return [undefined, ...FACE_CARDS];
//     } else {
//         deck.splice(1, 0, ...FACE_CARDS);
//         return deck;
//     }
// }
export function insertFaceCards([before, ...after]){
    return [before, ...FACE_CARDS, ...after];
}