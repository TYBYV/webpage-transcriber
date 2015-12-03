import content from './content';
import list from './list';
import input from './input';
import nav from './nav';
import form from './form';


/**
 * A list of all available transforms.
 */
export const transforms = {
    content,
    list,
    input,
    nav,
    form,
};


/**
 * Invokes the correct transform for the rule,
 * and returns the results.
 *
 * @param  {Object} rule
 * @param  {Node}   el
 * @return {Object}
 */
export default function transform(rule, el) {
    const transform = transforms[rule.transform];
    return transform(rule, el);
}
