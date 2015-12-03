/**
 * A shortcut for querySelectorAll that returns an array
 * instead of a NodeList.
 *
 * @this   Node
 * @param  {String}   selector
 * @return {Array}
 */
export default function select(selector) {
    const elements = this.querySelectorAll(selector);
    return Array.from(elements);
}
