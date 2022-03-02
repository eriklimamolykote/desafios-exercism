// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
 export function seeingDouble(deck) {
    let result = deck.map((card) => card * 2);
    return result;
  }
  
  /**
   *  Creates triplicates of every 3 found in the deck.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with triplicate 3s
   */
  export function threeOfEachThree(deck) {
    let result = deck.flatMap((card) => card === 3 ? [card, card, card] : [card]);
    return result;
  }
  
  /**
   * Extracts the middle two cards from a deck.
   * Assumes a deck is always 10 cards.
   *
   * @param {number[]} deck of 10 cards
   *
   * @returns {number[]} deck with only two middle cards
   */
  export function middleTwo(deck) {
    const middle = deck.length / 2;
    let result = deck.slice(middle - 1, middle + 1);
    return result;
  }
  
  /**
   * Moves the outside two cards to the middle.
   *
   * @param {number[]} deck with even number of cards
   *
   * @returns {number[]} transformed deck
   */
  
  export function sandwichTrick(deck) {
    const first = deck.shift();
    const last = deck.pop();

    deck.splice(deck.length / 2, 0, last, first);
    return deck;
  }
  
  /**
   * Removes every card from the deck except 2s.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with only 2s
   */
  export function twoIsSpecial(deck) {
    let result = deck.filter((card) => card === 2);
    return result;
  }
  
  /**
   * Returns a perfectly order deck from lowest to highest.
   *
   * @param {number[]} deck shuffled deck
   *
   * @returns {number[]} ordered deck
   */
  export function perfectlyOrdered(deck) {
    let result = deck.sort((a, b) => a - b);
    return result;
  }
  
  /**
   * Reorders the deck so that the top card ends up at the bottom.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} reordered deck
   */
  export function reorder(deck) {
    let result = deck.reverse();
    return result;
  }