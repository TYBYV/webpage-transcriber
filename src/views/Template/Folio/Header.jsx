import React from 'react';
import Component from 'views/Component';
import { PropTypes as T } from 'react';


export default class Header extends Component {

    static propTypes = {
        children: T.node,
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

}
