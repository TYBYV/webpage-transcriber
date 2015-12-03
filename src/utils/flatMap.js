import flatten from './flatten';


/**
 * A composition of map and flatten.
 *
 * Works like map, in that it maps a function over a sequence,
 * but flattens one level of nested arrays, so that each mapping
 * can lend multiple results, but still result in a flat list.
 *
 * @this   Array
 * @param  {Function} fn
 * @return {Array}
 */
export default function flatMap(fn) {
    return this.map(fn)::flatten();
}
