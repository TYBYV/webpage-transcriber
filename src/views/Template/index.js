import React from 'react';
import Component from 'views/Component';
import { PropTypes as T } from 'react';

import Google from './Google';
import Folio from './Folio';


export const templates = {
    google: Google,
    folio: Folio,
};


export default class Template extends Component {

    static propTypes = {
        template: T.string,
    }

    componentWillUpdate(nextProps) {
        if (this.props.template !== nextProps.template) {
            document.body.scrollTop = 0;
        }
    }

    render() {
        const template = templates[this.props.template];
        return React.createFactory(template)(this.props);
    }

}
