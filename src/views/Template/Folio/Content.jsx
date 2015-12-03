import React from 'react';
import Component from 'views/Component';
import { PropTypes as T } from 'react';


export default class Content extends Component {

    static propTypes = {
        subject: T.string,
        children: T.node,
    }

    static styles = {
        subject: {
            padding: 16,
            textAlign: 'center',
        }
    }

    render() {
        return (
            <div>
                <h2 style={Content.styles.subject}>
                    {this.props.subject}
                </h2>

                {this.props.children}
            </div>
        );
    }

}
