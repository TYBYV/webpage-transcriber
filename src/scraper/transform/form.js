import flatMap from 'utils/flatMap';
import select from '../select';
import transform from '.';


/**
 * Transforms a form with sub-fields into an object
 * describing them.
 *
 * Pass a list of rules as `controls` to match each
 * desired field.
 *
 * @param  {Object} rule
 * @return {Object}
 */
export default function formTransform(rule) {
    const {el, label} = rule;
    const method = el.method;
    const action = el.action;
    const controls = rule.controls::flatMap(function(control) {
        return select(control, el).map(transform);
    });
    return { type:'form', label, method, action, controls };
}
