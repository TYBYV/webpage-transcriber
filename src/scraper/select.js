import $ from 'utils/select';


/**
 * Maps a rule into another rule for each element that has been
 * matched by the CSS selector specified by that rule.
 *
 * Pass a custom root node to restrict the match.
 *
 * @param  {Object} rule
 * @param  {Node}   root=document
 * @return {Array}
 */
export default function select(rule, root=document) {
    const elements = root::$(rule.selector);
    return elements.map(el => ({ ...rule, el }));
}
