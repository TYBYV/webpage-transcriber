import flatMap from 'utils/flatMap';
import regroup from 'utils/regroup';
import select from './select';
import transform from './transform';


/**
 * Scrapes the root element and all of its children to
 * return a data representation of them according to spec.
 *
 * @param  {Object} spec
 * @param  {Node} [root=document]
 * @return {Object}
 */
export default function scrape(spec, root=document) {
    let payload = {};

    // Maps each rule, querying by its specified CSS selector,
    // into a list containing one rule per each matched DOM element.
    const rules = spec.rules::flatMap(rule => select(rule, root));

    // Run the transform over each rule, returning a data
    // representation that is suitable for the template.
    const roles = rules.map(rule => ({ role:rule.role, ...transform(rule) }));
    payload.roles = roles::regroup(x => x.role);

    /* eslint no-console:0 */
    // Just to be able to look at the produced results.
    console.log(payload);

    return payload;
}
