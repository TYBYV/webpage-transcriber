/**
 * Groups a list of object into a map between key and
 * a list of objects with that key.
 *
 * The key is obtained by running the selector function
 * on each object.
 *
 * @this   Array
 * @param  {Function} selector
 * @return {Object}
 */
export default function regroup(selector) {
    let obj = {};
    this.forEach(function(item) {
        const key = selector(item);
        if (!obj[key]) obj[key] = [];
        obj[key].push(item);
    });
    return obj;
}
