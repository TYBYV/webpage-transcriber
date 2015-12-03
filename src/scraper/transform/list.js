import select from '../select';
import transform from '.';


/**
 * Transforms a list of sub-items categorized by an item
 * or an header, by passing them through other transforms.
 *
 * Pass rules (no `role` needed) as `header` and `items`
 * to specify which elements to match.
 *
 * @param  {Object} rule
 * @return {Object}
 */
export default function listTransform(rule) {
    const {el, label} = rule;
    const header = select(rule.header, el).map(transform);
    const items = select(rule.items, el).map(transform);
    return { type:'list', label, header, items };
}
