import $ from 'utils/select';


/**
 * Transforms an element containing a list of links
 * into a list of link attributes.
 *
 * Select sub-items by passing `itemSelector` into the rule.
 *
 * @param  {Object} rule
 * @return {Object}
 */
export default function navTransform(rule) {
    const {el, label} = rule;
    const items = el::$(rule.itemSelector).map(item => ({
        href: item.href,
        text: item.innerText,
    }));
    return { type:'nav', label, items };
}
