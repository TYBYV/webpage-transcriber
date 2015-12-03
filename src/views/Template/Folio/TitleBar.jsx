import React from 'react';
import Component from 'views/Component';
import { PropTypes as T } from 'react';


export default class Title extends Component {

    static propTypes = {
        text: T.string,
        onClickMenu: T.func,
    }

    static styles = {
        container: {
            margin: '16px',
        },
        title: {
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 300,
        },
    }

    render() {
        return (
            <div style={Title.styles.container}>
                <h1 style={Title.styles.title}>
                    {this.props.text}
                </h1>
            </div>
        );
    }

}
