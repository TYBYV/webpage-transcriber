/**
 * Transforms an input element in an object
 * containing its main attributes.
 *
 * Pass `name`, `label`, or `type` into the rule
 * to override them on the resulting object.
 *
 * @param  {Object} rule
 * @return {Object}
 */
export default function input(rule) {
    const {el} = rule;
    const {tagName, name, type, value, placeholder} = el;
    return {
        name: rule.name || name,
        type: rule.type || type,
        label: rule.label,
        tagName,
        value,
        placeholder,
    };
}
