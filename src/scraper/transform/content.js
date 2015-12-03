/**
 * Transforms an element into an object containing
 * its textual and html stringified representations.
 *
 * @param  {Object} rule
 * @return {Object}
 */
export default function contentTransform(rule) {
    return {
        type: 'content',
        text: rule.el.innerText,
        html: rule.el.innerHTML,
    };
}
