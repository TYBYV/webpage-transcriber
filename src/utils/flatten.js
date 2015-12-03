/**
 * Flattens one level of depth from a nested array.
 *
 * @this   Array
 * @param  {Function} fn
 * @return {Array}
 */
export default function flatten() {
    return this.reduce((m, x) => m.concat(x), []);
}
