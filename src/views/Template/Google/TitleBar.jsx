import React from 'react';
import Component from 'views/Component';
import MenuButton from './MenuButton';
import { PropTypes as T } from 'react';


export default class Title extends Component {

    static propTypes = {
        text: T.string,
        onClickMenu: T.func,
    }

    static styles = {
        container: {
            padding: '5px 16px 12px',
            borderBottom: 'solid thin #ddd',
            background: '#F1F1F1',
        },
        title: {
            display: 'inline',
            fontSize: 18,
            fontWeight: 300,
        },
    }

    render() {
        return (
            <div style={Title.styles.container}>
                <MenuButton onClick={this.props.onClickMenu}/>
                <h1 style={Title.styles.title}>
                    {this.props.text}
                </h1>
            </div>
        );
    }

}
