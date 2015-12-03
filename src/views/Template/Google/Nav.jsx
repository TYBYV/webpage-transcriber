import React from 'react';
import Component from 'views/Component';
import { PropTypes as T } from 'react';


export default class Nav extends Component {

    static propTypes = {
        label: T.string,
        type: T.string,
        items: T.array,
    }

    static styles = {
        list: {
            padding: 0,
            listStyle: 'none',
        },
        item: {
            display: 'block',
            padding: '8px 0',
        },
    }

    render() {
        return (
            <ul style={Nav.styles.list}>
                {this.props.items.map(this.renderItem)}
            </ul>
        );
    }

    renderItem(item, i) {
        return (
            <li key={i}>
                {item.href
                    ? <a style={Nav.styles.item} href={item.href}>{item.text}</a>
                    : <span style={Nav.styles.item}>{item.text}</span>}
            </li>
        );
    }

}
