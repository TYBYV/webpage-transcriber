import React from 'react';
import Component from './Component';
import Template from './Template';
import { PropTypes as T } from 'react';


export default class Root extends Component {

    static propTypes = {
        payload: T.object.isRequired,
    }

    state = {
        template: 'google',
    }

    switchTemplate = () => {
        const template = this.state.template === 'google'? 'folio' : 'google';
        this.setState({ template });
    }

    render() {
        return (
            <Template
                payload={this.props.payload}
                template={this.state.template}
                onSwitchTemplate={this.switchTemplate}
            />
        );
    }

}
