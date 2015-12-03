import React from 'react';
import Component from 'views/Component';
import { PropTypes as T } from 'react';


export default class MenuButton extends Component {

    static propTypes = {
        onClick: T.func,
    }

    static styles = {
        button: {
            position: 'relative',
            top: 5,
            margin: 0,
            padding: 0,
            marginRight: 16,
            fontSize: '32px',
            lineHeight: 1,
            color: 'inherit',
            border: 'none',
            background: 'transparent',
        },
    }

    render() {
        return (
            <button style={MenuButton.styles.button}
                    onClick={this.props.onClick}>
                ≡
            </button>
        );
    }

}
